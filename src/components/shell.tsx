import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useLedger } from "@/lib/blog/store";

const links = [
  { to: "/", label: "Issue" },
  { to: "/membership", label: "Membership" },
  { to: "/desk", label: "Desk" },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const tier = useLedger((s) => s.tier);

  return (
    <div className="min-h-screen">
      <header className="border-b border-line bg-bg">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
          <Link to="/" className="min-w-0">
            <span className="font-display block text-2xl leading-none tracking-tight text-ink">
              Hearth Ledger
            </span>
            <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-muted">
              A small paid magazine
            </span>
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2">
            {links.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`rounded-full px-3 py-2 text-sm ${
                    active ? "bg-ink text-bg" : "text-ink hover:bg-line"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-5 py-10">{children}</main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-sm text-muted">
          <p>Issue 14 · October 2026 · Written to be finished, not skimmed.</p>
          <p>{tier === "none" ? "Reading as a guest" : tier === "member" ? "Member" : "Patron"}</p>
        </div>
      </footer>
    </div>
  );
}
