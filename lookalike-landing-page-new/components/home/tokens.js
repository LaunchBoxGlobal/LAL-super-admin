// ─── Exact gradient angles from Figma import ────────────────────────────────
export const GRAD =
  "linear-gradient(46.5166deg, rgb(94,81,201) 15.161%, rgb(64,142,232) 119.82%)";
export const GRAD_24 =
  "linear-gradient(24.0639deg, rgb(94,81,201) 15.161%, rgb(64,142,232) 119.82%)";
export const GRAD_6 =
  "linear-gradient(6.53803deg, rgb(94,81,201) 15.161%, rgb(64,142,232) 119.82%)";
export const GRAD_TEXT = {
  backgroundImage: GRAD,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

// ─── Page background — dual radial from Figma Bg component ──────────────────
export const PAGE_BG = `
  radial-gradient(circle 900px at 98% 2%, rgba(64,142,232,0.32) 0%, transparent 60%),
  radial-gradient(circle 900px at 2% 98%, rgba(94,81,201,0.28) 0%, transparent 60%),
  #ffffff
`.trim();

// Frosted overlay matching Figma Bg component (white 55% opacity + blur)
export const FROST = {
  background: "rgba(255,255,255,0.58)",
  backdropFilter: "blur(32px)",
};

// ─── Glass card styles from Figma ────────────────────────────────────────────
export const GLASS_LG = {
  background: "rgba(245,245,245,0.2)",
  backdropFilter: "blur(14.65px)",
  borderRadius: 32,
  boxShadow: "0px 10px 22.8px 0px rgba(0,0,0,0.10)",
  border: "1px solid rgba(255,255,255,0.55)",
};

export const GLASS_MD = {
  background: "rgba(255,255,255,0.22)",
  backdropFilter: "blur(14.65px)",
  borderRadius: 20,
  boxShadow: "0px 6px 16px 0px rgba(0,0,0,0.08)",
  border: "1px solid rgba(255,255,255,0.6)",
};

export const GLASS_SM = {
  background: "rgba(245,245,245,0.2)",
  backdropFilter: "blur(14.65px)",
  borderRadius: 12,
  boxShadow: "0px 4px 13.8px 0px rgba(0,0,0,0.07)",
  border: "1px solid rgba(255,255,255,0.55)",
};

// Nav bar glow shadow from Figma
export const NAV_SHADOW = "0px 0px 39.6px 0px rgba(94,81,201,0.43)";

// ─── Brand colors ────────────────────────────────────────────────────────────
export const C_PURPLE = "#5E51C9";
export const C_BLUE = "#408EE8";
export const C_BODY = "#202020";
export const C_SUB = "#555";
export const C_MUTED = "#888";
export const C_WHITE = "#f5f5f5";
export const C_GREEN = "#54CC58";

// ─── Typography ──────────────────────────────────────────────────────────────
export const FONT = "'Plus Jakarta Sans', 'General Sans', sans-serif";

// ─── Section label pill ───────────────────────────────────────────────────────
export const labelStyle = {
  ...GLASS_SM,
  color: C_PURPLE,
  fontWeight: 600,
  fontSize: "0.72rem",
  letterSpacing: "0.09em",
  padding: "6px 14px",
  display: "inline-block",
};
