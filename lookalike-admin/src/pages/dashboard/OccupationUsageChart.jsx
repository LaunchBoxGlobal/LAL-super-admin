import { useState } from "react";
import { OCCUPATION_USAGE_STATS } from "../../constants/occupationUsageStats";

const OccupationUsageChart = ({ data, chartType, setChartType }) => {
  return (
    <div className="w-full bg-white rounded-[20px] custom-shadow">
      <div className="w-full px-5 pt-5 flex items-center justify-between gap-3 flex-wrap">
        <div className="">
          <span className="text-[var(--secondary-text)] font-medium">
            Statistics
          </span>
          <h3 className="text-[18px] md:text-[21px] lg:text-[24px] font-semibold mt-1.5">
            Occupation Usage
          </h3>
        </div>
        <div className="w-full max-w-[188px] flex items-center justify-center gap-1 h-[49px] bg-[#f5f5f5] rounded-[14px]">
          <button
            type="button"
            onClick={() => setChartType("monthly")}
            className={`w-[86px] h-[37px] text-sm font-medium rounded-[13px] text-center ${
              chartType === "monthly"
                ? "text-white gradient-bg"
                : "bg-transparent text-[var(--secondary-text)]"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setChartType("annually")}
            className={`w-[86px] h-[37px] text-sm font-medium rounded-[13px] text-center ${
              chartType === "annually"
                ? "text-white gradient-bg"
                : "bg-transparent text-[var(--secondary-text)]"
            }`}
          >
            Annually
          </button>
        </div>
      </div>

      <div className="w-full border my-5" />

      <div className="w-full px-5 pb-8 space-y-4">
        {data?.map((c, i) => {
          return (
            c?.percentage !== 0 && (
              <div key={c?.country} className="w-full">
                {/* Header */}
                <div className="w-full flex items-center justify-between">
                  <h4 className="text-sm font-normal text-[#888888] leading-none">
                    {c?.occupation.charAt(0).toUpperCase() +
                      c?.occupation?.slice(1)}
                  </h4>
                  <p className="text-sm text-[#5E51C9] font-semibold">
                    {c?.percentage}%
                  </p>
                </div>

                {/* Bar */}
                <div className="w-full mt-1">
                  <div className="w-full h-[16px] rounded-[4px] bg-[#F5F5F5] relative">
                    <div
                      className={`absolute left-0 top-1/2 -translate-y-1/2 h-[16px] rounded-[4px] group cursor-pointer`}
                      style={{
                        width: `${c?.percentage}%`,
                        minWidth: "20px",
                        background: i % 2 === 0 ? "#5E51C9" : "#E0C6FD",
                        transition: "width 0.4s ease",
                      }}
                    >
                      {/* Tooltip */}
                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                        {c?.userCount} users
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default OccupationUsageChart;
