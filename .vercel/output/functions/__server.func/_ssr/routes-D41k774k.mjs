import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useLedger, r as formatDate, t as Shell } from "./shell-B1ITAFZM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D41k774k.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const [lead, ...rest] = useLedger((s) => s.posts);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.2em] text-muted",
				children: "The October issue"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-2 max-w-xl text-4xl leading-[1.05] text-ink sm:text-5xl",
				children: "Essays you can finish. A membership that pays for the lamp."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/membership",
				className: "inline-flex min-h-11 items-center rounded-full bg-accent px-5 py-2 text-sm text-accent-ink",
				children: "Join from $8"
			})]
		}),
		lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "grid items-stretch gap-6 border-b border-line pb-10 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/essay/$slug",
				params: { slug: lead.slug },
				className: "block overflow-hidden rounded-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: lead.cover,
					alt: "",
					className: "h-72 w-full object-cover sm:h-96"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs uppercase tracking-[0.18em] text-accent",
						children: [lead.category, lead.access === "member" ? " · Members" : " · Free"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-3 text-4xl leading-[1.1] text-ink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/essay/$slug",
							params: { slug: lead.slug },
							children: lead.title
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed text-ink",
						children: lead.dek
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-muted",
						children: [
							formatDate(lead.publishedAt),
							" · ",
							lead.minutes,
							" min"
						]
					})
				]
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "The issue is empty. Publish the first note from the Desk."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-8 divide-y divide-line",
			children: rest.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid gap-4 py-6 sm:grid-cols-[9rem_1fr] sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: post.cover,
					alt: "",
					className: "h-24 w-full rounded-card object-cover sm:h-24 sm:w-36"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-muted",
						children: [
							post.category,
							post.access === "member" ? " · Members" : " · Free",
							" · ",
							post.minutes,
							" min"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-1 text-2xl leading-tight",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/essay/$slug",
							params: { slug: post.slug },
							children: post.title
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-ink",
						children: post.dek
					})
				] })]
			}, post.id))
		})
	] });
}
//#endregion
export { Home as component };
