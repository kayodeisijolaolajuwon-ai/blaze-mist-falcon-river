export type Access = "free" | "member";

export type Post = {
  id: string;
  slug: string;
  title: string;
  dek: string;
  category: string;
  minutes: number;
  publishedAt: string;
  access: Access;
  cover: string;
  body: string[];
};

export const COVERS = [
  "/covers/desk.jpg",
  "/covers/coast.jpg",
  "/covers/table.jpg",
  "/covers/rain.jpg",
  "/covers/stacks.jpg",
] as const;

export const MEMBER_PRICE = 8;
export const PATRON_PRICE = 18;

export const seedPosts: Post[] = [
  {
    id: "p1",
    slug: "the-hour-before-the-inbox",
    title: "The hour before the inbox",
    dek: "A small argument for keeping the first light of the day off the ledger of other people’s urgency.",
    category: "Practice",
    minutes: 7,
    publishedAt: "2026-09-12",
    access: "free",
    cover: "/covers/desk.jpg",
    body: [
      "There is a narrow hour, usually before the kettle has fully decided, when the day has not yet been assigned a tone. Most of us hand that hour over without noticing. A notification arrives dressed as a question, and the question is really a claim on the next forty minutes.",
      "I started leaving the phone in the kitchen, face down, next to the spare keys. The rule is childish on purpose. If I have to stand up to see who wants me, I usually decide they can wait until the coffee is poured. The work that happens in that gap is not heroic. It is a page, a list, a sentence I would have forgotten by ten.",
      "What surprised me was not productivity. It was temperature. The morning stopped feeling like a corridor and started feeling like a room. Rooms have doors. Corridors only have destinations other people chose.",
      "If you sell your attention for a living — and almost everyone who writes, teaches, or builds now does — the unpaid hour is not a luxury. It is the inventory. You cannot monetize a mind that arrives at the desk already spent.",
    ],
  },
  {
    id: "p2",
    slug: "what-a-membership-is-for",
    title: "What a membership is actually for",
    dek: "Paywalls fail when they sell access. They work when they sell a reason to keep a small press alive.",
    category: "Money",
    minutes: 9,
    publishedAt: "2026-09-28",
    access: "member",
    cover: "/covers/stacks.jpg",
    body: [
      "Readers do not hate paying. They hate being cornered. A locked essay that opens with three paragraphs of throat-clearing feels like a turnstile at a park that used to be free. The writing has to earn the gate, and the gate has to be honest about what it funds.",
      "On Hearth Ledger the member tier is not a trick. Eight dollars a month keeps the desk warm: editing time, the photographs, the refusal to sell the margin of the page to a network that would rather you never finish a sentence. Patrons pay a little more so a piece can run long without a sponsor’s adjective in the second paragraph.",
      "The useful question for a writer is not “what can I hide?” It is “what would disappear if nobody paid?” Name that thing on the membership page. People subscribe to continuations, not to locks.",
      "A good paywall also leaks on purpose. The free pieces are complete. They are not bait. Bait trains readers to distrust the door. Completeness trains them to come back when the longer argument is waiting behind it.",
      "If you are building this for yourself, price the habit, not the PDF. Monthly is a relationship. A one-off tip is a compliment. Both belong on the ledger. Only one of them pays the rent in February.",
    ],
  },
  {
    id: "p3",
    slug: "salt-late-tomatoes",
    title: "Salt, late tomatoes, and the unmonetized lunch",
    dek: "Some meals refuse to become content. That may be why they are the ones worth describing.",
    category: "Table",
    minutes: 6,
    publishedAt: "2026-10-02",
    access: "free",
    cover: "/covers/table.jpg",
    body: [
      "The tomatoes arrived split, which is how you know September meant it. I salted them and left them alone long enough for a small lake to form on the board. Bread from yesterday. Oil that still smelled faintly of the peppercorn it was crushed with.",
      "There is a pressure, once you publish for money, to turn every plate into a post. I am trying to keep one meal a week that never leaves the table. Not because privacy is a brand. Because description is a solvent. Used on everything, it thins the day until nothing has a taste of its own.",
      "This one I am describing anyway, which is the contradiction writers live inside. The rule is not silence. The rule is consent. The lunch agreed to be written down because it was already over, and because nobody at the table asked how many people might read it.",
      "If your publication needs a food vertical, let it be specific and slightly inconvenient. Name the salt. Admit the bread was stale. Readers can smell a caption written for the algorithm. They subscribe to the person who was actually hungry.",
    ],
  },
  {
    id: "p4",
    slug: "walking-the-long-way",
    title: "Walking the long way back from the cliff",
    dek: "A route with no shortcut, and what it taught a publication about pacing.",
    category: "Place",
    minutes: 8,
    publishedAt: "2026-10-04",
    access: "member",
    cover: "/covers/coast.jpg",
    body: [
      "The path along the cliff is longer than the road, which is the only reason it is still a path. People who are late take the road. People who are publishing take the path, or they should. The sea does not care about your send date. That indifference is medicinal.",
      "I timed the walk once, which ruined it, so I stopped. Without a number the walk became a structure: grass, fence, a turn where the wind changes its mind, then the town again. Essays want the same bones. A beginning that is only weather. A middle that changes direction. An ending that is the town, not a moral.",
      "Membership readers get this piece because it is the one I would have cut for length in a magazine that sold ads by the column inch. Length is the product. Not padding — duration. The time it takes to feel the wind change.",
      "When you price a publication, you are pricing pace. A free blog optimized for reach writes in sprints. A ledger supported by members can afford the long way. Tell your readers that. They are not paying to be impressed. They are paying so you do not have to hurry the turn.",
    ],
  },
  {
    id: "p5",
    slug: "rain-on-the-glass",
    title: "Rain on the glass, revenue on the desk",
    dek: "How to look at money without letting it rewrite the sentence you were in the middle of.",
    category: "Money",
    minutes: 8,
    publishedAt: "2026-10-06",
    access: "free",
    cover: "/covers/rain.jpg",
    body: [
      "The honest dashboard is a little ugly. Members, patrons, a monthly figure that moves when someone stays and when someone leaves. I keep it on a second page, not in the margin of the draft. Money is a weather system. You check it. You do not narrate the essay in its voice.",
      "Hearth Ledger separates the two rooms on purpose. The front of the house is the issue: pieces, with a clear mark when one of them is for members. The back room — the Desk — is where a new piece gets a title, a price, and a place in the ledger. Publishing is a button. Subscribing is a different button, on a different page, with the price written in ordinary numbers.",
      "None of this charges a real card in the preview. The membership you take here is a working model of the door: it unlocks the archive on this device and adds you to the count the Desk is already keeping. When you are ready for a processor, the shape of the product should not have to change. Only the pipe behind the button.",
      "Until then, read the free issue all the way through. If a locked piece is the one you wanted, the membership page will tell you exactly what eight dollars is buying. No countdown. No scarce seats. Just the work, and the cost of keeping the lamp on while it rains.",
    ],
  },
];

export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1));
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
