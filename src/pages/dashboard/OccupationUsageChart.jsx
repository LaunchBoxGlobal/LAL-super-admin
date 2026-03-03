import { useState } from "react";
import { OCCUPATION_USAGE_STATS } from "../../constants/occupationUsageStats";

const OccupationUsageChart = () => {
  const [chartType, setChartType] = useState("annually");
  return (
    <div className="w-full bg-white rounded-[20px] custom-shadow">
      <div className="w-full px-5 pt-5 flex items-center justify-between gap-3 flex-wrap">
        <div className="">
          <span className="text-[var(--secondary-text)] font-medium">
            Statistics
          </span>
          <h3 className="text-[18px] md:text-[21px] lg:text-[24px] font-semibold mt-1.5">
            Occupation usage
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
            Annully
          </button>
        </div>
      </div>

      <div className="w-full border my-5" />

      <div className="w-full px-5 pb-8 space-y-4">
        {OCCUPATION_USAGE_STATS?.map((c, i) => {
          return (
            <div key={c?.country} className="w-full">
              <div className="w-full flex items-center justify-between">
                <h4 className="text-sm font-normal text-[#888888] leading-none">
                  {c?.country}
                </h4>
                <p className="text-sm text-[#5E51C9] font-semibold">
                  {c?.percentage}%
                </p>
              </div>
              <div className="w-full mt-1">
                <div className="w-full h-[16px] rounded-[4px] bg-[#F5F5F5]">
                  <div
                    className={`w-full h-[16px] rounded-[4px]`}
                    style={{
                      width: `${c?.percentage}%`,
                      background: c?.color,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OccupationUsageChart;
