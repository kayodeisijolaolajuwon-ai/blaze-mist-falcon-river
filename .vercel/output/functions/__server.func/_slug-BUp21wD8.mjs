import { C as require_jsx_runtime, b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./_ssr/router-D32DAzgK.mjs";
import { a as useLedger, n as canRead, r as formatDate, t as Shell } from "./_ssr/shell-B1ITAFZM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BUp21wD8.js
var import_jsx_runtime = require_jsx_runtime();
function EssayPage() {
	const { slug } = Route.useParams();
	const post = useLedger((s) => s.posts.find((p) => p.slug === slug));
	const tier = useLedger((s) => s.tier);
	if (!post) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-lg",
		children: "That piece is not in this issue."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		className: "mt-4 inline-block text-accent underline",
		children: "Back to the issue"
	})] });
	const open = canRead(post.access, tier);
	const visible = open ? post.body : post.body.slice(0, 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs uppercase tracking-[0.18em] text-accent",
				children: [post.category, post.access === "member" ? " · Members" : " · Free"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-3 text-4xl leading-[1.08] sm:text-5xl",
				children: post.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xl leading-relaxed text-ink",
				children: post.dek
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted",
				children: [
					formatDate(post.publishedAt),
					" · ",
					post.minutes,
					" min read"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: post.cover,
				alt: "",
				className: "mt-8 aspect-[3/2] w-full rounded-card object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-5 text-lg leading-[1.6]",
				children: visible.map((para, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: i === 0 ? "drop-cap" : void 0,
					children: para
				}, i))
			}),
			!open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 border border-line bg-surface p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl",
						children: "The rest of this piece is for members."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted",
						children: "Eight dollars a month opens the archive on this device. Nothing is charged — this preview keeps the membership on your browser so you can feel the door work."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/membership",
						className: "mt-5 inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm text-accent-ink",
						children: "Become a member"
					})
				]
			}) : null
		]
	}) });
}
//#endregion
export { EssayPage as component };
