import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/shell";
import { MEMBER_PRICE, PATRON_PRICE, type Access } from "@/lib/blog/data";
import { monthlyRevenue, useLedger } from "@/lib/blog/store";

export const Route = createFileRoute("/desk")({ component: DeskPage });

function DeskPage() {
  const posts = useLedger((s) => s.posts);
  const members = useLedger((s) => s.members);
  const patrons = useLedger((s) => s.patrons);
  const publish = useLedger((s) => s.publish);
  const removePost = useLedger((s) => s.removePost);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [dek, setDek] = useState("");
  const [category, setCategory] = useState("Notes");
  const [access, setAccess] = useState<Access>("free");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  const revenue = monthlyRevenue(members, patrons);
  const memberPosts = posts.filter((p) => p.access === "member").length;

  return (
    <Shell>
      <p className="text-xs uppercase tracking-[0.2em] text-muted">Publisher desk</p>
      <h1 className="font-display mt-2 text-4xl leading-tight sm:text-5xl">What the magazine earns</h1>
      <p className="mt-3 max-w-2xl text-lg text-ink">
        The figures below are the working ledger for this preview: a seeded readership, plus anyone who
        joins from the membership page on this device. No card is charged.
      </p>

      <section className="mt-8 grid gap-3 sm:grid-cols-3">
        <Stat label="Monthly" value={`$${revenue.toLocaleString("en-US")}`} detail="members + patrons" />
        <Stat label="Members" value={String(members)} detail={`$${MEMBER_PRICE} each`} />
        <Stat label="Patrons" value={String(patrons)} detail={`$${PATRON_PRICE} each`} />
      </section>
      <p className="mt-3 text-sm text-muted">
        {memberPosts} piece{memberPosts === 1 ? "" : "s"} sit behind the membership. Free pieces stay open
        so the issue still reads without a subscription.
      </p>

      <form
        className="mt-10 border border-line bg-surface p-5"
        onSubmit={(e) => {
          e.preventDefault();
          if (title.trim().length < 3 || body.trim().length < 40) {
            setError("Give the piece a title and at least a short paragraph.");
            return;
          }
          const slug = publish({ title, dek: dek || title, category, access, body });
          setTitle("");
          setDek("");
          setBody("");
          setError("");
          void navigate({ to: "/essay/$slug", params: { slug } });
        }}
      >
        <h2 className="font-display text-2xl">Publish a piece</h2>
        <Field label="Title" value={title} onChange={setTitle} />
        <Field label="Deck" value={dek} onChange={setDek} />
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Field label="Category" value={category} onChange={setCategory} />
          <label className="block text-sm text-muted">
            Access
            <select
              value={access}
              onChange={(e) => setAccess(e.target.value as Access)}
              className="mt-2 w-full border border-line bg-bg px-3 py-3 text-ink"
            >
              <option value="free">Free — complete for everyone</option>
              <option value="member">Members — teaser, then the gate</option>
            </select>
          </label>
        </div>
        <label className="mt-4 block text-sm text-muted">
          Essay
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={8}
            placeholder="Separate paragraphs with a blank line."
            className="mt-2 w-full border border-line bg-bg px-3 py-3 text-ink outline-none focus:border-ink"
          />
        </label>
        {error ? <p className="mt-3 text-sm text-accent">{error}</p> : null}
        <button
          type="submit"
          className="mt-4 inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm text-bg"
        >
          Publish to the issue
        </button>
      </form>

      <ul className="mt-8 divide-y divide-line">
        {posts.map((post) => (
          <li key={post.id} className="flex items-center justify-between gap-4 py-4">
            <div>
              <p className="font-display text-xl">{post.title}</p>
              <p className="text-sm text-muted">
                {post.access === "member" ? "Members" : "Free"} · {post.category}
              </p>
            </div>
            <button
              type="button"
              onClick={() => removePost(post.id)}
              className="min-h-11 px-3 text-sm text-muted underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </Shell>
  );
}

function Stat({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="border border-line bg-surface px-4 py-4">
      <p className="text-xs uppercase tracking-[0.16em] text-muted">{label}</p>
      <p className="font-display mt-1 text-3xl">{value}</p>
      <p className="text-sm text-muted">{detail}</p>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="mt-4 block text-sm text-muted">
      {label}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full border border-line bg-bg px-3 py-3 text-ink outline-none focus:border-ink"
      />
    </label>
  );
}
