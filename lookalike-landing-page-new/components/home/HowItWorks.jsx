"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  GRAD,
  GRAD_TEXT,
  GLASS_LG,
  GLASS_SM,
  C_PURPLE,
  C_BLUE,
  C_BODY,
  C_MUTED,
  C_GREEN,
  FONT,
  PAGE_BG,
  FROST,
  labelStyle,
} from "./tokens";

const STEP_COLORS = [C_PURPLE, C_BLUE, "#7c6de8", "#5E82D8", "#408EE8"];

const STEPS = [
  // ── 01 ───────────────────────────────────────────────────────────────────
  {
    n: "01",
    title: "Upload a Clear Photo",
    sub: "Front-facing works best.",
    desc: "Start with a clear photo where your face is easy to see. No heavy filters, sunglasses, or side angles.",
    icon: "📸",
    visual: () => (
      <div className="flex flex-col items-center gap-6">
        {/* Scaled up: w-36 → w-48 */}
        <div className="relative w-48 h-48">
          <img
            src="https://images.unsplash.com/photo-1612203304476-2ed23c55b5b9?w=240&h=240&fit=crop&auto=format"
            alt="Upload selfie"
            className="w-full h-full rounded-full object-cover"
            style={{
              border: "3px solid rgba(94,81,201,0.25)",
              boxShadow: "0 0 0 10px rgba(94,81,201,0.06)",
            }}
          />
          <motion.div
            className="absolute bottom-2 right-2 w-12 h-12 rounded-full flex items-center justify-center"
            style={{
              backgroundImage: GRAD,
              boxShadow: "0 4px 12px rgba(94,81,201,0.4)",
            }}
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg width="18" height="15" viewBox="0 0 16 13" fill="none">
              <path
                d="M13.5 6.5H9V2M9 2L6.5 4.5M9 2L11.5 4.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="1"
                y="3"
                width="5"
                height="7"
                rx="1"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </motion.div>
          {[
            { top: 6, left: 6, rotate: "0deg" },
            { top: 6, right: 6, rotate: "90deg" },
            { bottom: 6, left: 6, rotate: "-90deg" },
            { bottom: 6, right: 6, rotate: "180deg" },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute w-5 h-5 pointer-events-none"
              style={{
                ...pos,
                borderTop: "2px solid rgba(94,81,201,0.6)",
                borderLeft: "2px solid rgba(94,81,201,0.6)",
                borderRadius: "2px",
                transform: `rotate(${pos.rotate})`,
              }}
            />
          ))}
        </div>
        <div
          className="px-5 py-2.5 rounded-[12px] text-sm text-center"
          style={{ ...GLASS_SM, color: C_PURPLE, fontWeight: 600 }}
        >
          Ready to scan ✓
        </div>
        <div className="flex gap-2 flex-wrap justify-center">
          {["Front-facing", "No filters", "Just you"].map((label) => (
            <span
              key={label}
              className="text-xs px-3 py-1.5 rounded-full"
              style={{ ...GLASS_SM, color: C_MUTED, fontWeight: 600 }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    ),
  },

  // ── 02 ───────────────────────────────────────────────────────────────────
  {
    n: "02",
    title: "We Scan the Details",
    sub: "Eyes, smile, jawline, face shape.",
    desc: "LookAlike checks the small facial cues that make someone feel weirdly familiar to you.",
    icon: "🧠",
    visual: () => (
      /* Scaled up: w-44 → w-56 */
      <div className="relative flex items-center justify-center w-56 h-56 mx-auto">
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=240&h=240&fit=crop&auto=format"
          alt="AI analysis"
          className="w-full h-full rounded-full object-cover"
          style={{
            border: "3px solid rgba(64,142,232,0.25)",
            boxShadow: "0 0 0 10px rgba(64,142,232,0.06)",
          }}
        />
        <motion.div
          className="absolute left-0 right-0 h-[2px] rounded-full pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(64,142,232,0.85), transparent)",
          }}
          animate={{ top: ["10%", "88%", "10%"] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
        />
        {[
          [38, 35],
          [62, 35],
          [50, 50],
          [40, 65],
          [60, 65],
          [50, 28],
          [50, 75],
        ].map(([x, y], i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              background: C_BLUE,
              opacity: 0.7,
            }}
            animate={{ scale: [0.8, 1.6, 0.8], opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
        <motion.div
          className="absolute -inset-5 rounded-full"
          style={{ border: "1.5px solid rgba(64,142,232,0.3)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -inset-10 rounded-full"
          style={{ border: "1px solid rgba(64,142,232,0.15)" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        {/* Badge moved further below to clear the larger image */}
        <motion.div
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-xs whitespace-nowrap"
          style={{ ...GLASS_SM, color: C_BLUE, fontWeight: 700 }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        >
          247 cues mapped
        </motion.div>
      </div>
    ),
  },

  // ── 03 ───────────────────────────────────────────────────────────────────
  {
    n: "03",
    title: "See Real Matches",
    sub: "Real people, not celebrities.",
    desc: "Your closest real-person matches appear with resemblance scores, so you can see who actually looks like you.",
    icon: "✨",
    visual: () => (
      /* Wider and taller cards: max-w-[220px] → max-w-[270px] */
      <div className="space-y-3.5 w-full max-w-[270px] mx-auto">
        {[
          {
            label: "Hold up. This is close.",
            pct: 92,
            img: "https://images.unsplash.com/photo-1562337404-3044c84ac061?w=80&h=80&fit=crop&auto=format",
          },
          {
            label: "Same face energy.",
            pct: 88,
            img: "https://images.unsplash.com/photo-1669844444850-5acd7e8c71c5?w=80&h=80&fit=crop&auto=format",
          },
          {
            label: "Different life. Familiar look.",
            pct: 84,
            img: "https://images.unsplash.com/photo-1607569708758-0270aa4651bd?w=80&h=80&fit=crop&auto=format",
          },
        ].map((p, i) => (
          <motion.div
            key={p.label}
            className="flex items-center gap-3 px-4 py-3.5 rounded-[18px]"
            style={{ ...GLASS_LG }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12 }}
          >
            <img
              src={p.img}
              alt=""
              className="w-11 h-11 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  color: C_BODY,
                  marginBottom: 5,
                }}
              >
                {p.label}
              </p>
              <div
                className="h-1.5 rounded-full overflow-hidden"
                style={{ background: "rgba(94,81,201,0.1)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundImage: GRAD, transformOrigin: "left" }}
                  initial={{ width: 0 }}
                  animate={{ width: `${p.pct}%` }}
                  transition={{ duration: 0.9, delay: 0.3 + i * 0.12 }}
                />
              </div>
            </div>
            <span
              className="text-xs px-2.5 py-1 rounded-[10px] text-white flex-shrink-0"
              style={{ backgroundImage: GRAD, fontWeight: 800 }}
            >
              {p.pct}%
            </span>
          </motion.div>
        ))}
      </div>
    ),
  },

  // ── 04 ───────────────────────────────────────────────────────────────────
  {
    n: "04",
    title: "Explore the Match",
    sub: "Look closer before you react.",
    desc: "Open a match, compare the details, view their profile, and decide if the resemblance is actually as close as it feels.",
    icon: "🔍",
    visual: () => (
      /* Wider container: max-w-[240px] → max-w-[290px] */
      <div className="w-full max-w-[290px] mx-auto">
        <div className="rounded-[22px] p-5 mb-5" style={{ ...GLASS_LG }}>
          <p
            className="text-center text-xs mb-4"
            style={{ color: C_MUTED, fontWeight: 600, letterSpacing: "0.06em" }}
          >
            COMPARE
          </p>
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center gap-2 flex-1">
              <img
                src="https://images.unsplash.com/photo-1612203304476-2ed23c55b5b9?w=90&h=90&fit=crop&auto=format"
                alt="You"
                className="w-16 h-16 rounded-full object-cover"
                style={{
                  border: "2.5px solid rgba(94,81,201,0.3)",
                  boxShadow: "0 0 0 5px rgba(94,81,201,0.07)",
                }}
              />
              <span
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  color: C_PURPLE,
                }}
              >
                You
              </span>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <motion.div
                className="px-3.5 py-2 rounded-full text-white text-sm"
                style={{
                  fontWeight: 800,
                  backgroundImage: GRAD,
                  boxShadow: "0 4px 12px rgba(94,81,201,0.35)",
                }}
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 2.2, repeat: Infinity }}
              >
                92%
              </motion.div>
              <div className="flex gap-0.5">
                {["eyes", "smile", "jawline"].map((trait, i) => (
                  <motion.div
                    key={trait}
                    className="h-0.5 w-7 rounded-full"
                    style={{ backgroundImage: GRAD }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.4 }}
                  />
                ))}
              </div>
              <span
                style={{ fontSize: "0.6rem", color: C_MUTED, fontWeight: 600 }}
              >
                match
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 flex-1">
              <img
                src="https://images.unsplash.com/photo-1562337404-3044c84ac061?w=90&h=90&fit=crop&auto=format"
                alt="Match"
                className="w-16 h-16 rounded-full object-cover"
                style={{
                  border: "2.5px solid rgba(64,142,232,0.3)",
                  boxShadow: "0 0 0 5px rgba(64,142,232,0.07)",
                }}
              />
              <span
                style={{ fontSize: "0.68rem", fontWeight: 700, color: C_BLUE }}
              >
                Match
              </span>
            </div>
          </div>
        </div>

        {/* Trait chips */}
        <div className="flex flex-wrap gap-2 justify-center">
          {["same eyes", "similar smile", "similar jawline", "face shape"].map(
            (trait, i) => (
              <motion.span
                key={trait}
                className="text-xs px-3 py-1.5 rounded-full"
                style={{ ...GLASS_SM, color: C_PURPLE, fontWeight: 700 }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                {trait}
              </motion.span>
            ),
          )}
        </div>
      </div>
    ),
  },

  // ── 05 ───────────────────────────────────────────────────────────────────
  {
    n: "05",
    title: "Start a Chat",
    sub: "If the match feels worth it.",
    desc: "When curiosity kicks in, start a one-to-one chat and find out who is behind that strangely familiar face.",
    icon: "💬",
    visual: () => (
      /* Wider: max-w-[230px] → max-w-[280px] */
      <div className="w-full max-w-[280px] mx-auto">
        <div className="rounded-[22px] overflow-hidden" style={{ ...GLASS_LG }}>
          {/* Header */}
          <div
            className="flex items-center gap-3 px-5 py-3.5"
            style={{ borderBottom: "1px solid rgba(94,81,201,0.1)" }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1562337404-3044c84ac061?w=56&h=56&fit=crop&auto=format"
                alt="Match"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span
                className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white"
                style={{ background: C_GREEN }}
              />
            </div>
            <div>
              <p
                style={{ fontWeight: 700, fontSize: "0.82rem", color: C_BODY }}
              >
                Your 92% match
              </p>
              <p
                style={{ fontSize: "0.65rem", color: C_GREEN, fontWeight: 600 }}
              >
                Online now
              </p>
            </div>
            <div
              className="ml-auto px-2.5 py-1 rounded-full text-xs text-white"
              style={{ backgroundImage: GRAD, fontWeight: 700 }}
            >
              92%
            </div>
          </div>

          {/* Messages */}
          <div className="px-4 py-4 space-y-2.5">
            <motion.div
              className="flex justify-start"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div
                className="max-w-[80%] px-3.5 py-2.5 rounded-[14px] rounded-tl-[4px] text-xs"
                style={{
                  background: "rgba(94,81,201,0.1)",
                  color: C_BODY,
                  fontWeight: 500,
                  lineHeight: 1.5,
                }}
              >
                Wait, we actually look alike?? 👀
              </div>
            </motion.div>
            <motion.div
              className="flex justify-end"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 }}
            >
              <div
                className="max-w-[80%] px-3.5 py-2.5 rounded-[14px] rounded-tr-[4px] text-xs text-white"
                style={{
                  backgroundImage: GRAD,
                  lineHeight: 1.5,
                  fontWeight: 500,
                }}
              >
                That's exactly why I messaged 😄
              </div>
            </motion.div>
            <motion.div
              className="flex justify-start"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              <div
                className="flex items-center gap-1 px-3.5 py-2.5 rounded-[14px] rounded-tl-[4px]"
                style={{ background: "rgba(94,81,201,0.08)" }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: C_PURPLE, opacity: 0.5 }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Input */}
          <div className="px-4 pb-4">
            <div
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-[12px]"
              style={{
                background: "rgba(94,81,201,0.06)",
                border: "1px solid rgba(94,81,201,0.12)",
              }}
            >
              <span style={{ fontSize: "0.75rem", color: C_MUTED, flex: 1 }}>
                Say something...
              </span>
              <motion.div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundImage: GRAD }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                <svg width="11" height="11" viewBox="0 0 10 10" fill="none">
                  <path d="M1 9L9 5L1 1V4.2L6.5 5L1 5.8V9Z" fill="white" />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-20 lg:pt-10">
      <div className="relative z-10 max-w-7xl mx-auto padding-x">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div id="how-it-works" className="flex justify-center mb-7">
            <span style={labelStyle}>HOW IT WORKS</span>
          </div>
          <h2 className="leading-[1.08] text-4xl lg:text-[58px] font-bold">
            How You Find Your <span className="gradient-text">Face Twin</span>
          </h2>
          <p className="max-w-lg mx-auto text-[#616161] mt-5">
            Simple enough to try once. Interesting enough to stay longer.
          </p>
        </motion.div>

        {/* ── 2-column grid ── */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: step accordion — slightly more padding per card */}
          <div className="space-y-3">
            {STEPS.map((step, i) => {
              const color = STEP_COLORS[i];
              const isActive = active === i;
              return (
                <motion.div
                  key={step.n}
                  className="rounded-[28px] p-6 cursor-pointer transition-all duration-300"
                  style={
                    isActive
                      ? {
                          background: "rgba(255,255,255,0.5)",
                          backdropFilter: "blur(14.65px)",
                          boxShadow: "0px 12px 28px 0px rgba(94,81,201,0.14)",
                          border: `1.5px solid ${color}30`,
                        }
                      : { ...GLASS_LG }
                  }
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon + connector */}
                    <div className="flex flex-col items-center gap-2 flex-shrink-0">
                      <div
                        className="w-11 h-11 rounded-[13px] flex items-center justify-center text-base"
                        style={
                          isActive
                            ? {
                                backgroundImage: GRAD,
                                boxShadow: `0 4px 14px ${color}50`,
                              }
                            : GLASS_SM
                        }
                      >
                        <span
                          style={
                            isActive
                              ? { filter: "brightness(0) invert(1)" }
                              : {}
                          }
                        >
                          {step.icon}
                        </span>
                      </div>
                      {/* Connector line — taller min-h for 5-step rhythm */}
                      {i < STEPS.length - 1 && (
                        <motion.div
                          className="w-px flex-1 min-h-[28px]"
                          style={{
                            backgroundImage: isActive ? GRAD : "none",
                            background: isActive
                              ? undefined
                              : "rgba(94,81,201,0.14)",
                          }}
                        />
                      )}
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          style={{
                            fontSize: "0.65rem",
                            fontWeight: 800,
                            color: "#5E51C9",
                            letterSpacing: "0.1em",
                            fontFamily: FONT,
                          }}
                        >
                          STEP {step.n}
                        </span>
                        {i < active && (
                          <span
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{
                              background: "rgba(84,204,88,0.12)",
                              color: "#22a830",
                              fontWeight: 700,
                              fontSize: "0.6rem",
                            }}
                          >
                            ✓ done
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-semibold my-2">
                        {step.title}
                      </h3>
                      <p className="text-[13px] text-[#5E51C9] font-semibold">
                        {step.sub}
                      </p>
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            key="desc"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="text-sm text-[#888888] mt-3"
                          >
                            {step.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT: visual panel
              – minHeight raised from 400 → 640 to match 5-step stack
              – padding raised from p-10 → p-12
              – internal spacings proportionally increased
          */}
          <div className="lg:sticky lg:top-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="flex flex-col items-center justify-center rounded-[32px] p-12"
                style={{ ...GLASS_LG, minHeight: 640 }}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35 }}
              >
                {/* Step indicator — more breathing room below */}
                <div className="mb-10 text-center">
                  <span
                    className="text-xs px-3 py-1.5 rounded-full"
                    style={{
                      ...GLASS_SM,
                      color: "#7C6DE8",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                    }}
                  >
                    STEP {STEPS[active].n} / 05
                  </span>
                </div>

                {/* Visual content for active step */}
                {STEPS[active].visual()}

                {/* Sub-caption — more space above */}
                <p
                  className="text-center mt-20 max-w-xs"
                  style={{
                    color: "C_MUTED",
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    fontFamily: FONT,
                  }}
                >
                  {STEPS[active].sub}
                </p>

                {/* Dot navigation — more space above, slightly larger dots */}
                <div className="flex items-center gap-2.5 mt-10">
                  {STEPS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`transition-all duration-300`}
                      style={{
                        width: active === i ? 32 : 10,
                        height: 10,
                        borderRadius: 999,
                        backgroundImage: active === i ? GRAD : "none",
                        background: active !== i ? "rgba(94,81,201,0.2)" : GRAD,
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
