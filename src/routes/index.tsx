import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { formatDate } from "@/lib/blog/data";
import { useLedger } from "@/lib/blog/store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const posts = useLedger((s) => s.posts);
  const [lead, ...rest] = posts;

  return (
    <Shell>
      <section className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">The October issue</p>
          <h1 className="font-display mt-2 max-w-xl text-4xl leading-[1.05] text-ink sm:text-5xl">
            Essays you can finish. A membership that pays for the lamp.
          </h1>
        </div>
        <Link
          to="/membership"
          className="inline-flex min-h-11 items-center rounded-full bg-accent px-5 py-2 text-sm text-accent-ink"
        >
          Join from $8
        </Link>
      </section>

      {lead ? (
        <article className="grid items-stretch gap-6 border-b border-line pb-10 md:grid-cols-2">
          <Link to="/essay/$slug" params={{ slug: lead.slug }} className="block overflow-hidden rounded-card">
            <img
              src={lead.cover}
              alt=""
              className="h-72 w-full object-cover sm:h-96"
            />
          </Link>
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.18em] text-accent">
              {lead.category}
              {lead.access === "member" ? " · Members" : " · Free"}
            </p>
            <h2 className="font-display mt-3 text-4xl leading-[1.1] text-ink">
              <Link to="/essay/$slug" params={{ slug: lead.slug }}>
                {lead.title}
              </Link>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink">{lead.dek}</p>
            <p className="mt-4 text-sm text-muted">
              {formatDate(lead.publishedAt)} · {lead.minutes} min
            </p>
          </div>
        </article>
      ) : (
        <p className="text-muted">The issue is empty. Publish the first note from the Desk.</p>
      )}

      <ul className="mt-8 divide-y divide-line">
        {rest.map((post) => (
          <li key={post.id} className="grid gap-4 py-6 sm:grid-cols-[9rem_1fr] sm:items-center">
            <img src={post.cover} alt="" className="h-24 w-full rounded-card object-cover sm:h-24 sm:w-36" />
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                {post.category}
                {post.access === "member" ? " · Members" : " · Free"} · {post.minutes} min
              </p>
              <h3 className="font-display mt-1 text-2xl leading-tight">
                <Link to="/essay/$slug" params={{ slug: post.slug }}>
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 text-ink">{post.dek}</p>
            </div>
          </li>
        ))}
      </ul>
    </Shell>
  );
}
