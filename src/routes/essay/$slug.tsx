import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { formatDate } from "@/lib/blog/data";
import { canRead, useLedger } from "@/lib/blog/store";

export const Route = createFileRoute("/essay/$slug")({ component: EssayPage });

function EssayPage() {
  const { slug } = Route.useParams();
  const post = useLedger((s) => s.posts.find((p) => p.slug === slug));
  const tier = useLedger((s) => s.tier);

  if (!post) {
    return (
      <Shell>
        <p className="text-lg">That piece is not in this issue.</p>
        <Link to="/" className="mt-4 inline-block text-accent underline">
          Back to the issue
        </Link>
      </Shell>
    );
  }

  const open = canRead(post.access, tier);
  const visible = open ? post.body : post.body.slice(0, 2);

  return (
    <Shell>
      <article className="mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-[0.18em] text-accent">
          {post.category}
          {post.access === "member" ? " · Members" : " · Free"}
        </p>
        <h1 className="font-display mt-3 text-4xl leading-[1.08] sm:text-5xl">{post.title}</h1>
        <p className="mt-4 text-xl leading-relaxed text-ink">{post.dek}</p>
        <p className="mt-3 text-sm text-muted">
          {formatDate(post.publishedAt)} · {post.minutes} min read
        </p>
        <img src={post.cover} alt="" className="mt-8 aspect-[3/2] w-full rounded-card object-cover" />
        <div className="mt-8 space-y-5 text-lg leading-[1.6]">
          {visible.map((para, i) => (
            <p key={i} className={i === 0 ? "drop-cap" : undefined}>
              {para}
            </p>
          ))}
        </div>
        {!open ? (
          <div className="mt-8 border border-line bg-surface p-6">
            <p className="font-display text-2xl">The rest of this piece is for members.</p>
            <p className="mt-2 text-muted">
              Eight dollars a month opens the archive on this device. Nothing is charged — this preview
              keeps the membership on your browser so you can feel the door work.
            </p>
            <Link
              to="/membership"
              className="mt-5 inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm text-accent-ink"
            >
              Become a member
            </Link>
          </div>
        ) : null}
      </article>
    </Shell>
  );
}
