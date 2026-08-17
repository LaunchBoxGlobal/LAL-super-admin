"use client";

import { useEffect, useState } from "react";

const TRUST_SCORE = [
  {
    title: "Safety",
    percentage: "98%",
    value: 98,
  },
  {
    title: "Privacy",
    percentage: "96%",
    value: 96,
  },
  {
    title: "Authenticity",
    percentage: "99%",
    value: 99,
  },
];

export default function TrustScore() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full pt-4">
      <div className="w-full glass-card p-5 lg:p-6 rounded-[32px]">
        <p className="text-[13px] font-bold leading-none">
          Platform Trust Score
        </p>

        <div className="w-full grid grid-cols-3 gap-3 mt-3">
          {TRUST_SCORE.map((trust, index) => (
            <div key={trust.title}>
              <div className="flex items-center justify-between">
                <p className="text-xs text-[#888888]">{trust.title}</p>
                <p className="text-xs gradient-text font-bold">
                  {trust.percentage}
                </p>
              </div>

              {/* Background */}
              <div className="w-full h-2 bg-white/10 rounded-xl mt-1 overflow-hidden">
                {/* Progress */}
                <div
                  className="h-full gradient-bg rounded-xl transition-all ease-out"
                  style={{
                    width: animate ? `${trust.value}%` : "0%",
                    transitionDuration: "900ms",
                    transitionDelay: `${index * 400}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
