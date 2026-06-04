import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", {
	boxSizing: "border-box",
	margin: 0,
	padding: 0,
});

globalStyle("html, body", {
	fontSynthesis: "none",
	WebkitFontSmoothing: "antialiased",
	MozOsxFontSmoothing: "grayscale",
	WebkitTextSizeAdjust: "100%",
});

globalStyle("button, input, select, textarea", {
	borderRadius: 0,
});
