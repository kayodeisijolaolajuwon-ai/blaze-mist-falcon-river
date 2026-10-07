import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useLedger, i as monthlyRevenue, t as Shell } from "./shell-B1ITAFZM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/desk-BkR_1jc8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DeskPage() {
	const posts = useLedger((s) => s.posts);
	const members = useLedger((s) => s.members);
	const patrons = useLedger((s) => s.patrons);
	const publish = useLedger((s) => s.publish);
	const removePost = useLedger((s) => s.removePost);
	const navigate = useNavigate();
	const [title, setTitle] = (0, import_react.useState)("");
	const [dek, setDek] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("Notes");
	const [access, setAccess] = (0, import_react.useState)("free");
	const [body, setBody] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const revenue = monthlyRevenue(members, patrons);
	const memberPosts = posts.filter((p) => p.access === "member").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs uppercase tracking-[0.2em] text-muted",
			children: "Publisher desk"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display mt-2 text-4xl leading-tight sm:text-5xl",
			children: "What the magazine earns"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-2xl text-lg text-ink",
			children: "The figures below are the working ledger for this preview: a seeded readership, plus anyone who joins from the membership page on this device. No card is charged."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8 grid gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Monthly",
					value: `$${revenue.toLocaleString("en-US")}`,
					detail: "members + patrons"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Members",
					value: String(members),
					detail: `$8 each`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Patrons",
					value: String(patrons),
					detail: `$18 each`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-sm text-muted",
			children: [
				memberPosts,
				" piece",
				memberPosts === 1 ? "" : "s",
				" sit behind the membership. Free pieces stay open so the issue still reads without a subscription."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-10 border border-line bg-surface p-5",
			onSubmit: (e) => {
				e.preventDefault();
				if (title.trim().length < 3 || body.trim().length < 40) {
					setError("Give the piece a title and at least a short paragraph.");
					return;
				}
				const slug = publish({
					title,
					dek: dek || title,
					category,
					access,
					body
				});
				setTitle("");
				setDek("");
				setBody("");
				setError("");
				navigate({
					to: "/essay/$slug",
					params: { slug }
				});
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Publish a piece"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Title",
					value: title,
					onChange: setTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Deck",
					value: dek,
					onChange: setDek
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Category",
						value: category,
						onChange: setCategory
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm text-muted",
						children: ["Access", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: access,
							onChange: (e) => setAccess(e.target.value),
							className: "mt-2 w-full border border-line bg-bg px-3 py-3 text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "free",
								children: "Free — complete for everyone"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "member",
								children: "Members — teaser, then the gate"
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-4 block text-sm text-muted",
					children: ["Essay", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: body,
						onChange: (e) => setBody(e.target.value),
						rows: 8,
						placeholder: "Separate paragraphs with a blank line.",
						className: "mt-2 w-full border border-line bg-bg px-3 py-3 text-ink outline-none focus:border-ink"
					})]
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-accent",
					children: error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "mt-4 inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm text-bg",
					children: "Publish to the issue"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-8 divide-y divide-line",
			children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center justify-between gap-4 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl",
					children: post.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						post.access === "member" ? "Members" : "Free",
						" · ",
						post.category
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => removePost(post.id),
					className: "min-h-11 px-3 text-sm text-muted underline",
					children: "Remove"
				})]
			}, post.id))
		})
	] });
}
function Stat({ label, value, detail }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-line bg-surface px-4 py-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.16em] text-muted",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display mt-1 text-3xl",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: detail
			})
		]
	});
}
function Field({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "mt-4 block text-sm text-muted",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value,
			onChange: (e) => onChange(e.target.value),
			className: "mt-2 w-full border border-line bg-bg px-3 py-3 text-ink outline-none focus:border-ink"
		})]
	});
}
//#endregion
export { DeskPage as component };
