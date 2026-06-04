import { globalStyle } from "@vanilla-extract/css";
import { theme } from "./theme.css";

// ─── Foundation ──────────────────────────────────────────────────────────────

globalStyle("html", {
	background: theme.color.background.base,
});

globalStyle("body", {
	fontFamily: theme.typography.family.mono,
	fontSize: theme.typography.size.base,
	lineHeight: theme.typography.lineHeight.relaxed,
	color: theme.color.foreground.secondary,
	// Dot grid — subtle grid lines over the page background
	background: [
		`linear-gradient(180deg, color-mix(in srgb, ${theme.color.background.base} 94%, transparent) 0, transparent 16rem)`,
		`linear-gradient(90deg, color-mix(in srgb, ${theme.color.grid} 18%, transparent) 1px, transparent 1px) center top / 2rem 2rem`,
		`linear-gradient(color-mix(in srgb, ${theme.color.grid} 18%, transparent) 1px, transparent 1px) center top / 2rem 2rem`,
		theme.color.background.base,
	].join(", "),
});

// ─── Layout ──────────────────────────────────────────────────────────────────

globalStyle(".site-container", {
	maxWidth: "72rem",
	marginInline: "auto",
	paddingInline: "clamp(1rem, 4vw, 2rem)",
});

// ─── Header ──────────────────────────────────────────────────────────────────

globalStyle(".header", {
	position: "sticky",
	top: 0,
	zIndex: Number(theme.zIndex.sticky),
	backdropFilter: "blur(16px)",
	background: `color-mix(in srgb, ${theme.color.background.base} 82%, transparent)`,
	boxShadow: `0 1px 0 color-mix(in srgb, ${theme.color.foreground.primary} 10%, transparent)`,
});

globalStyle(".header .site-container", {
	display: "flex",
	alignItems: "center",
	gap: theme.spacing["6"],
	paddingBlock: theme.spacing["2"],
});

globalStyle(".header nav", {
	display: "flex",
	alignItems: "center",
	gap: "0.25rem",
	marginInlineStart: "auto",
});

globalStyle(".header nav a", {
	padding: `${theme.spacing["1"]} 0.75rem`,
	fontSize: theme.typography.size.xs,
	fontWeight: theme.typography.weight.semibold,
	letterSpacing: theme.typography.letterSpacing.wider,
	textTransform: "uppercase",
	textDecoration: "none",
	color: theme.color.foreground.secondary,
	transition: theme.transition.fast,
	borderRadius: theme.border.radius.none,
});

globalStyle(".header nav a:hover", {
	color: theme.color.foreground.primary,
});

globalStyle(".header nav a[aria-current='page']", {
	color: theme.color.interactive.focus,
	background: `color-mix(in srgb, ${theme.color.interactive.focus} 10%, transparent)`,
});

// ─── Site title ──────────────────────────────────────────────────────────────

globalStyle(".site-title", {
	display: "flex",
	alignItems: "center",
	gap: "0.625rem",
	textDecoration: "none",
	color: theme.color.foreground.primary,
	fontWeight: theme.typography.weight.bold,
	letterSpacing: theme.typography.letterSpacing.wide,
});

globalStyle(".site-title img", {
	width: "2.5rem",
	height: "2.5rem",
	flex: "none",
});

// ─── Theme toggle ────────────────────────────────────────────────────────────

globalStyle("#theme-toggle", {
	display: "grid",
	placeItems: "center",
	width: "2rem",
	height: "2rem",
	border: `${theme.border.width.thin} solid color-mix(in srgb, ${theme.color.interactive.focus} 28%, ${theme.color.border.secondary})`,
	background: "transparent",
	cursor: "pointer",
	color: theme.color.foreground.tertiary,
	borderRadius: theme.border.radius.none,
	clipPath: theme.clipPath.sm,
	marginInlineStart: theme.spacing["2"],
	flex: "none",
	transition: theme.transition.fast,
});

globalStyle("#theme-toggle:hover", {
	color: theme.color.interactive.focus,
	borderColor: theme.color.interactive.focus,
});

globalStyle("#theme-toggle svg", {
	display: "block",
});

// ─── Main / page sections ────────────────────────────────────────────────────

globalStyle("main", {
	minHeight: "calc(100vh - 3.5rem - 4rem)",
});

globalStyle(".page-section", {
	paddingBlock: "clamp(3rem, 8vw, 6rem)",
});

// ─── Hero ────────────────────────────────────────────────────────────────────

globalStyle(".hero", {
	position: "relative",
	isolation: "isolate",
	padding: "clamp(2.5rem, 6vw, 4.5rem) clamp(1.5rem, 4vw, 3rem)",
	margin: "clamp(1rem, 3vw, 2rem) 0",
});

globalStyle(".hero::before", {
	content: '""',
	position: "absolute",
	inset: "-1.25rem",
	border: `${theme.border.width.thin} solid ${theme.color.border.secondary}`,
	clipPath: theme.clipPath.lg,
	background: theme.color.background.surface,
	zIndex: -1,
});

globalStyle(".hero .tagline", {
	fontSize: "clamp(1rem, 2vw, 1.2rem)",
	color: theme.color.foreground.secondary,
	maxWidth: "38rem",
	lineHeight: theme.typography.lineHeight.relaxed,
	marginBlock: theme.spacing["5"],
});

globalStyle(".hero .actions", {
	display: "flex",
	flexWrap: "wrap",
	gap: "0.75rem",
	marginBlockStart: theme.spacing["8"],
});

globalStyle(".hero .actions a", {
	display: "inline-flex",
	alignItems: "center",
	gap: theme.spacing["2"],
	padding: "0.625rem 1.25rem",
	fontSize: theme.typography.size.xs,
	fontWeight: theme.typography.weight.semibold,
	letterSpacing: theme.typography.letterSpacing.wider,
	textTransform: "uppercase",
	textDecoration: "none",
	borderRadius: theme.border.radius.none,
	clipPath: theme.clipPath.base,
	transition: theme.transition.fast,
});

globalStyle(".hero .actions a:hover", {
	opacity: 0.85,
});

globalStyle(".hero .actions a svg", {
	display: "block",
	flex: "none",
});

globalStyle(".action-primary", {
	background: theme.color.interactive.focus,
	color: theme.color.background.base,
});

globalStyle(".action-secondary", {
	background: "transparent",
	color: theme.color.foreground.primary,
	border: `${theme.border.width.thin} solid color-mix(in srgb, ${theme.color.interactive.focus} 32%, ${theme.color.border.secondary})`,
});

// ─── Page title ──────────────────────────────────────────────────────────────

globalStyle("[data-page-title]", {
	fontFamily: theme.typography.family.mono,
	fontWeight: theme.typography.weight.bold,
	letterSpacing: theme.typography.letterSpacing.engineering,
	textTransform: "uppercase",
	lineHeight: theme.typography.lineHeight.tight,
	fontSize: "clamp(2.5rem, 7vw, 5rem)",
	color: theme.color.foreground.primary,
	textShadow: `0.04em 0.04em 0 color-mix(in srgb, ${theme.color.interactive.focus} 12%, transparent)`,
});

// ─── Card grid ───────────────────────────────────────────────────────────────

globalStyle(".card-grid", {
	display: "grid",
	gridTemplateColumns: "repeat(auto-fill, minmax(18rem, 1fr))",
	gap: theme.spacing["5"],
});

// ─── Card ────────────────────────────────────────────────────────────────────

globalStyle(".card", {
	padding: theme.spacing["6"],
	textDecoration: "none",
	display: "block",
	position: "relative",
	overflow: "hidden",
	borderWidth: theme.border.width.thin,
	borderStyle: theme.border.style.solid,
	borderColor: theme.color.border.secondary,
	background: theme.color.background.surface,
	clipPath: theme.clipPath.md,
	transition: theme.transition.fast,
});

globalStyle(".card:hover", {
	borderColor: `color-mix(in srgb, ${theme.color.interactive.focus} 30%, ${theme.color.border.secondary})`,
	background: `color-mix(in srgb, ${theme.color.background.surface} 96%, ${theme.color.interactive.focus} 4%)`,
});

globalStyle(".card .icon", {
	display: "grid",
	placeItems: "center",
	width: "2.5rem",
	height: "2.5rem",
	marginBlockEnd: theme.spacing["4"],
	background: `color-mix(in srgb, ${theme.color.interactive.focus} 12%, transparent)`,
	border: `${theme.border.width.thin} solid color-mix(in srgb, ${theme.color.interactive.focus} 22%, ${theme.color.border.secondary})`,
	clipPath: theme.clipPath.sm,
	color: theme.color.interactive.focus,
});

globalStyle(".card .title", {
	fontSize: theme.typography.size.base,
	fontWeight: theme.typography.weight.bold,
	letterSpacing: theme.typography.letterSpacing.engineering,
	textTransform: "uppercase",
	color: theme.color.foreground.primary,
	marginBlockEnd: theme.spacing["2"],
});

globalStyle(".card .body", {
	fontSize: theme.typography.size.sm,
	color: theme.color.foreground.secondary,
	lineHeight: theme.typography.lineHeight.relaxed,
});

globalStyle(".card .card-link", {
	display: "inline-flex",
	alignItems: "center",
	gap: "0.375rem",
	marginBlockStart: theme.spacing["4"],
	fontSize: theme.typography.size.xs,
	fontWeight: theme.typography.weight.semibold,
	letterSpacing: theme.typography.letterSpacing.wider,
	textTransform: "uppercase",
	color: theme.color.interactive.focus,
	textDecoration: "none",
});

// ─── Prose ───────────────────────────────────────────────────────────────────

globalStyle(".prose", {
	maxWidth: "52rem",
	lineHeight: theme.typography.lineHeight.relaxed,
	color: theme.color.foreground.secondary,
});

globalStyle(".prose h2", {
	fontSize: "clamp(0.75rem, 1.2vw, 0.85rem)",
	fontWeight: theme.typography.weight.bold,
	color: theme.color.foreground.primary,
	marginBlock: "2.5rem 0.75rem",
	letterSpacing: theme.typography.letterSpacing.engineering,
	textTransform: "uppercase",
});

globalStyle(".prose h2:first-child", {
	marginBlockStart: "0",
});

globalStyle(".prose p", {
	marginBlockEnd: theme.spacing["5"],
});

globalStyle(".prose code", {
	fontFamily: theme.typography.family.mono,
	fontSize: "0.875em",
	background: `color-mix(in srgb, ${theme.color.background.base} 82%, ${theme.color.background.surface})`,
	border: `${theme.border.width.thin} solid color-mix(in srgb, ${theme.color.interactive.focus} 22%, ${theme.color.border.secondary})`,
	color: theme.color.foreground.primary,
	paddingInline: "0.35rem",
});

globalStyle(".prose pre", {
	background: `color-mix(in srgb, ${theme.color.background.base} 88%, ${theme.color.background.surface})`,
	border: `${theme.border.width.thin} solid color-mix(in srgb, ${theme.color.interactive.focus} 22%, ${theme.color.border.secondary})`,
	padding: `${theme.spacing["5"]} ${theme.spacing["6"]}`,
	overflowX: "auto",
	fontSize: theme.typography.size.sm,
	lineHeight: "1.7",
	marginBlock: theme.spacing["6"],
	clipPath: theme.clipPath.base,
});

globalStyle(".prose pre code", {
	background: "none",
	border: "none",
	padding: "0",
	fontSize: "inherit",
	clipPath: "none",
});

globalStyle(".prose a", {
	color: theme.color.interactive.focus,
	textDecoration: "none",
});

globalStyle(".prose a:hover", {
	textDecoration: "underline",
});

// ─── Footer ──────────────────────────────────────────────────────────────────

globalStyle(".site-footer", {
	borderTop: `${theme.border.width.thin} solid color-mix(in srgb, ${theme.color.foreground.primary} 10%, transparent)`,
	paddingBlock: theme.spacing["6"],
	marginBlockStart: theme.spacing["16"],
	color: theme.color.foreground.tertiary,
	fontSize: "0.85rem",
});

globalStyle(".site-footer .site-container", {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	flexWrap: "wrap",
	gap: "0.75rem",
});

globalStyle(".site-footer a", {
	color: theme.color.foreground.secondary,
	textDecoration: "none",
});

globalStyle(".site-footer a:hover", {
	color: theme.color.interactive.focus,
});

globalStyle(".site-footer nav", {
	display: "flex",
	gap: theme.spacing["5"],
});

// ─── Project cards (projects page) ───────────────────────────────────────────

globalStyle(".card-header", {
	display: "flex",
	alignItems: "flex-start",
	justifyContent: "space-between",
	marginBlockEnd: theme.spacing["4"],
});

globalStyle(".card-header .icon", {
	marginBlockEnd: "0",
});

globalStyle(".lang", {
	fontSize: theme.typography.size.xs,
	fontWeight: theme.typography.weight.semibold,
	letterSpacing: theme.typography.letterSpacing.wider,
	textTransform: "uppercase",
	padding: "0.2rem 0.5rem",
	clipPath: theme.clipPath.sm,
	border: `${theme.border.width.thin} solid`,
});

globalStyle(".lang--typescript", {
	color: theme.color.semantic.container,
	background: `color-mix(in srgb, ${theme.color.semantic.container} 10%, transparent)`,
	borderColor: `color-mix(in srgb, ${theme.color.semantic.container} 30%, transparent)`,
});

globalStyle(".lang--rust", {
	color: theme.color.semantic.external,
	background: `color-mix(in srgb, ${theme.color.semantic.external} 10%, transparent)`,
	borderColor: `color-mix(in srgb, ${theme.color.semantic.external} 30%, transparent)`,
});

// ─── Stack grid (about page) ─────────────────────────────────────────────────

globalStyle(".stack-grid", {
	display: "flex",
	flexWrap: "wrap",
	gap: "0.625rem",
	paddingInline: "clamp(1rem, 4vw, 2rem)",
	marginBlockEnd: "clamp(3rem, 8vw, 6rem)",
	maxWidth: "52rem",
});

globalStyle(".stack-item", {
	display: "inline-flex",
	alignItems: "center",
	gap: theme.spacing["2"],
	padding: "0.45rem 0.85rem",
	fontSize: theme.typography.size.xs,
	fontWeight: theme.typography.weight.semibold,
	letterSpacing: theme.typography.letterSpacing.wider,
	textTransform: "uppercase",
	textDecoration: "none",
	color: theme.color.foreground.secondary,
	background: theme.color.background.surface,
	border: `${theme.border.width.thin} solid ${theme.color.border.secondary}`,
	clipPath: theme.clipPath.base,
	transition: theme.transition.fast,
});

globalStyle(".stack-item:hover", {
	color: theme.color.interactive.focus,
	borderColor: theme.color.interactive.focus,
	background: `color-mix(in srgb, ${theme.color.interactive.focus} 8%, ${theme.color.background.surface})`,
});

globalStyle(".stack-item svg", {
	display: "block",
	flex: "none",
	opacity: "0.7",
});

globalStyle(".stack-item:hover svg", {
	opacity: "1",
});

// ─── Focus ───────────────────────────────────────────────────────────────────

globalStyle(":focus-visible", {
	outline: `2px solid ${theme.color.interactive.focus}`,
	outlineOffset: "0.2rem",
});
