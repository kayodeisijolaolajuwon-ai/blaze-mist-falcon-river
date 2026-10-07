import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useLedger, t as Shell } from "./shell-B1ITAFZM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/membership-oOg_2Jg9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MembershipPage() {
	const tier = useLedger((s) => s.tier);
	const memberName = useLedger((s) => s.memberName);
	const subscribe = useLedger((s) => s.subscribe);
	const cancel = useLedger((s) => s.cancel);
	const [name, setName] = (0, import_react.useState)(memberName);
	const [picked, setPicked] = (0, import_react.useState)("member");
	const [note, setNote] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs uppercase tracking-[0.2em] text-muted",
			children: "Support the ledger"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display mt-2 max-w-2xl text-4xl leading-[1.08] sm:text-5xl",
			children: "Pay for the pieces that do not have to hurry."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-lg leading-relaxed text-ink",
			children: "Free essays stay complete. Membership opens the longer archive. In this preview the button does not charge a card — it records your tier in the browser and counts you on the Desk."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-4 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plan, {
				title: "Member",
				price: 8,
				selected: picked === "member",
				onPick: () => setPicked("member"),
				points: [
					"Every members’ essay",
					"The full archive on this device",
					"Your name on the colophon"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plan, {
				title: "Patron",
				price: 18,
				selected: picked === "patron",
				onPick: () => setPicked("patron"),
				points: [
					"Everything in Member",
					"Keeps one long piece uncut each month",
					"Listed as a patron"
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-8 max-w-lg border border-line bg-surface p-5",
			onSubmit: (e) => {
				e.preventDefault();
				const trimmed = name.trim();
				if (!trimmed) {
					setNote("Add the name you want on the colophon.");
					return;
				}
				subscribe(picked, trimmed);
				setNote(picked === "member" ? "You are a member. Locked essays are open." : "You are a patron. The archive is open, and the long pieces can stay long.");
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-sm text-muted",
					htmlFor: "member-name",
					children: "Name on the colophon"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "member-name",
					value: name,
					onChange: (e) => setName(e.target.value),
					className: "mt-2 w-full border border-line bg-bg px-3 py-3 text-ink outline-none focus:border-ink",
					placeholder: "Your name"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "mt-4 inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm text-accent-ink",
					children: tier === picked ? "Update membership" : `Join as ${picked} · $${picked === "member" ? 8 : 18}/mo`
				}),
				tier !== "none" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: cancel,
					className: "ml-3 text-sm text-muted underline",
					children: "Cancel"
				}) : null,
				note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-ink",
					children: note
				}) : null,
				tier !== "none" && !note ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-muted",
					children: [
						"Current: ",
						tier,
						", listed as ",
						memberName || "a reader",
						"."
					]
				}) : null
			]
		})
	] });
}
function Plan({ title, price, points, selected, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onPick,
		className: `border p-5 text-left ${selected ? "border-ink bg-surface" : "border-line bg-bg"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.16em] text-muted",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-display mt-2 text-4xl",
				children: [
					"$",
					price,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg text-muted",
						children: " / month"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2 text-sm",
				children: points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: point }, point))
			})
		]
	});
}
//#endregion
export { MembershipPage as component };
