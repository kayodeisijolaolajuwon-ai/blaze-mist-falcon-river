import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  COVERS,
  MEMBER_PRICE,
  PATRON_PRICE,
  seedPosts,
  type Access,
  type Post,
} from "@/lib/blog/data";

export type Tier = "none" | "member" | "patron";

type LedgerState = {
  posts: Post[];
  tier: Tier;
  memberName: string;
  members: number;
  patrons: number;
  subscribe: (tier: Exclude<Tier, "none">, name: string) => void;
  cancel: () => void;
  publish: (input: {
    title: string;
    dek: string;
    category: string;
    access: Access;
    body: string;
  }) => string;
  removePost: (id: string) => void;
};

function slugify(title: string) {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
  return base || "note";
}

export const useLedger = create<LedgerState>()(
  persist(
    (set, get) => ({
      posts: seedPosts,
      tier: "none",
      memberName: "",
      members: 186,
      patrons: 24,
      subscribe: (tier, name) =>
        set((state) => {
          let members = state.members;
          let patrons = state.patrons;
          if (state.tier === "member") members -= 1;
          if (state.tier === "patron") patrons -= 1;
          if (tier === "member") members += 1;
          if (tier === "patron") patrons += 1;
          return {
            tier,
            memberName: name.trim(),
            members: Math.max(0, members),
            patrons: Math.max(0, patrons),
          };
        }),
      cancel: () =>
        set((state) => ({
          tier: "none",
          memberName: "",
          members: state.tier === "member" ? Math.max(0, state.members - 1) : state.members,
          patrons: state.tier === "patron" ? Math.max(0, state.patrons - 1) : state.patrons,
        })),
      publish: (input) => {
        const slugBase = slugify(input.title);
        const taken = new Set(get().posts.map((p) => p.slug));
        let slug = slugBase;
        let n = 2;
        while (taken.has(slug)) {
          slug = `${slugBase}-${n}`;
          n += 1;
        }
        const paragraphs = input.body
          .split(/\n\s*\n/)
          .map((p) => p.trim())
          .filter(Boolean);
        const words = paragraphs.join(" ").split(/\s+/).filter(Boolean).length;
        const post: Post = {
          id: `local-${Date.now()}`,
          slug,
          title: input.title.trim(),
          dek: input.dek.trim(),
          category: input.category.trim() || "Notes",
          minutes: Math.max(2, Math.round(words / 180)),
          publishedAt: new Date().toISOString().slice(0, 10),
          access: input.access,
          cover: COVERS[get().posts.length % COVERS.length] ?? COVERS[0],
          body: paragraphs,
        };
        set((state) => ({ posts: [post, ...state.posts] }));
        return slug;
      },
      removePost: (id) =>
        set((state) => ({ posts: state.posts.filter((p) => p.id !== id) })),
    }),
    { name: "hearth-ledger" },
  ),
);

export function monthlyRevenue(members: number, patrons: number) {
  return members * MEMBER_PRICE + patrons * PATRON_PRICE;
}

export function canRead(access: Access, tier: Tier) {
  return access === "free" || tier !== "none";
}
