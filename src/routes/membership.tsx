import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/shell";
import { MEMBER_PRICE, PATRON_PRICE } from "@/lib/blog/data";
import { useLedger, type Tier } from "@/lib/blog/store";

export const Route = createFileRoute("/membership")({ component: MembershipPage });

function MembershipPage() {
  const tier = useLedger((s) => s.tier);
  const memberName = useLedger((s) => s.memberName);
  const subscribe = useLedger((s) => s.subscribe);
  const cancel = useLedger((s) => s.cancel);
  const [name, setName] = useState(memberName);
  const [picked, setPicked] = useState<Exclude<Tier, "none">>("member");
  const [note, setNote] = useState("");

  return (
    <Shell>
      <p className="text-xs uppercase tracking-[0.2em] text-muted">Support the ledger</p>
      <h1 className="font-display mt-2 max-w-2xl text-4xl leading-[1.08] sm:text-5xl">
        Pay for the pieces that do not have to hurry.
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink">
        Free essays stay complete. Membership opens the longer archive. In this preview the button
        does not charge a card — it records your tier in the browser and counts you on the Desk.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Plan
          title="Member"
          price={MEMBER_PRICE}
          selected={picked === "member"}
          onPick={() => setPicked("member")}
          points={["Every members’ essay", "The full archive on this device", "Your name on the colophon"]}
        />
        <Plan
          title="Patron"
          price={PATRON_PRICE}
          selected={picked === "patron"}
          onPick={() => setPicked("patron")}
          points={["Everything in Member", "Keeps one long piece uncut each month", "Listed as a patron"]}
        />
      </div>

      <form
        className="mt-8 max-w-lg border border-line bg-surface p-5"
        onSubmit={(e) => {
          e.preventDefault();
          const trimmed = name.trim();
          if (!trimmed) {
            setNote("Add the name you want on the colophon.");
            return;
          }
          subscribe(picked, trimmed);
          setNote(
            picked === "member"
              ? "You are a member. Locked essays are open."
              : "You are a patron. The archive is open, and the long pieces can stay long.",
          );
        }}
      >
        <label className="block text-sm text-muted" htmlFor="member-name">
          Name on the colophon
        </label>
        <input
          id="member-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full border border-line bg-bg px-3 py-3 text-ink outline-none focus:border-ink"
          placeholder="Your name"
        />
        <button
          type="submit"
          className="mt-4 inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm text-accent-ink"
        >
          {tier === picked ? "Update membership" : `Join as ${picked} · $${picked === "member" ? MEMBER_PRICE : PATRON_PRICE}/mo`}
        </button>
        {tier !== "none" ? (
          <button type="button" onClick={cancel} className="ml-3 text-sm text-muted underline">
            Cancel
          </button>
        ) : null}
        {note ? <p className="mt-3 text-sm text-ink">{note}</p> : null}
        {tier !== "none" && !note ? (
          <p className="mt-3 text-sm text-muted">
            Current: {tier}, listed as {memberName || "a reader"}.
          </p>
        ) : null}
      </form>
    </Shell>
  );
}

function Plan({
  title,
  price,
  points,
  selected,
  onPick,
}: {
  title: string;
  price: number;
  points: string[];
  selected: boolean;
  onPick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onPick}
      className={`border p-5 text-left ${selected ? "border-ink bg-surface" : "border-line bg-bg"}`}
    >
      <p className="text-xs uppercase tracking-[0.16em] text-muted">{title}</p>
      <p className="font-display mt-2 text-4xl">
        ${price}
        <span className="text-lg text-muted"> / month</span>
      </p>
      <ul className="mt-4 space-y-2 text-sm">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </button>
  );
}
