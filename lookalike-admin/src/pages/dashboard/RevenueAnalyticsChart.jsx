import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import clsx from "clsx";

const tabs = [
  { title: "Weekly", key: "weekly" },
  { title: "Monthly", key: "monthly" },
  { title: "Yearly", key: "yearly" },
];

const CustomBar = (props) => {
  const { x, y, width, height } = props;
  const radius = Math.min(12, width / 2);

  if (height <= 0) return null;

  return (
    <g>
      {/* Main Bar */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="url(#barGradient)"
        rx={radius}
        ry={radius}
      />
      {/* Top Cap */}
      <rect
        x={x - 2}
        y={y - 2}
        width={width + 4}
        height={6}
        fill="#408EE8"
        rx={3}
        ry={3}
      />
    </g>
  );
};

const ActiveBar = (props) => {
  const { x, y, width, height, background } = props;
  const radius = Math.min(12, width / 2);

  if (height <= 0) return null;

  return (
    <g>
      {/* Dashed line */}
      {background && (
        <line
          x1={x + width / 2}
          y1={background.y}
          x2={x + width / 2}
          y2={background.y + background.height}
          stroke="#5E51C9"
          strokeWidth={1.5}
          strokeDasharray="4 4"
        />
      )}

      {/* Main Bar */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="url(#barGradient)"
        rx={radius}
        ry={radius}
      />

      {/* Top Cap */}
      <rect
        x={x - 2}
        y={y - 2}
        width={width + 4}
        height={6}
        fill="#408EE8"
        rx={3}
        ry={3}
      />

      {/* Active Dot */}
      <circle
        cx={x + width / 2}
        cy={y}
        r={6}
        fill="#ffffff"
        stroke="#5E51C9"
        strokeWidth={3}
      />
    </g>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return (
      <div className="bg-white rounded-xl py-2.5 px-4 border border-gray-100 flex items-center">
        <span className="gradient-text font-bold text-lg">
          $
          {value.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
    );
  }
  return null;
};

function getYAxisConfig(maxValue) {
  if (!maxValue || maxValue <= 0) {
    return { domain: [0, 10], ticks: [0, 2, 4, 6, 8, 10] };
  }

  // Round the max up to a "nice" number, then split into 4 even ticks.
  const magnitude = Math.pow(10, Math.floor(Math.log10(maxValue)));
  const normalized = maxValue / magnitude;

  let niceMax;
  if (normalized <= 1) niceMax = 1 * magnitude;
  else if (normalized <= 2) niceMax = 2 * magnitude;
  else if (normalized <= 5) niceMax = 5 * magnitude;
  else niceMax = 10 * magnitude;

  // Add ~10% headroom above the tallest bar, then re-round.
  niceMax = niceMax * 1.0;
  const step = niceMax / 4;
  const ticks = [0, step, step * 2, step * 3, step * 4];

  return { domain: [0, step * 4], ticks };
}

const formatTick = (value) => {
  if (value === 0) return "0";
  if (value >= 1000) return `${value / 1000}k`;
  // Keep it as a whole/short number for small-dollar ranges (e.g. $0-40)
  return Number.isInteger(value) ? `${value}` : value.toFixed(1);
};

export default function RevenueAnalyticsChart({
  data,
  activeTab,
  setActiveTab,
}) {
  const chartData = (data || []).map((item) => ({
    name: item.label,
    revenue: Number(item.revenue),
    subscriptions: Number(item.payingSubscriptions),
  }));

  const maxRevenue = chartData.reduce(
    (max, item) => Math.max(max, item.revenue),
    0,
  );
  const { domain, ticks } = getYAxisConfig(maxRevenue);

  return (
    <div className="w-full mx-auto p-4 md:p-8 bg-white custom-shadow rounded-[20px] mt-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-[22px] font-bold text-gray-900 tracking-tight">
            Revenue Analytics
          </h2>
          <p className="text-[#565656] font-medium mt-1 text-base">
            Monthly revenue and user growth
          </p>
        </div>

        {/* Tabs */}
        <div className="flex bg-[#F5F5F5] rounded-[14px] p-1.5 self-start md:self-auto border border-gray-100">
          {tabs.map((tab) => (
            <button
              key={tab?.key}
              onClick={() => setActiveTab(tab?.key)}
              className={clsx(
                "px-6 h-[36px] rounded-[12px] text-sm font-medium transition-all duration-200 ease-in-out",
                activeTab === tab?.key
                  ? "gradient-bg text-white"
                  : "text-[#888888] hover:text-gray-900",
              )}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center mb-10 mt-2">
        <div className="w-4 h-4 rounded-md gradient-bg mr-2.5" />
        <span className="text-gray-700 font-medium text-sm">Revenue</span>
      </div>

      {/* Chart */}
      <div className="h-[400px] w-full">
        {chartData.length === 0 ? (
          <div className="h-full w-full flex items-center justify-center text-gray-400 text-sm">
            No revenue data for this period
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 10, left: -10, bottom: 10 }}
            >
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#408EE8" stopOpacity={1} />
                  <stop offset="100%" stopColor="#5E51C9" stopOpacity={1} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="4 4"
                vertical={false}
                stroke="#f3f4f6"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 13, fontWeight: 500 }}
                tickMargin={16}
              />
              <YAxis
                ticks={ticks}
                tickFormatter={formatTick}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 13, fontWeight: 500 }}
                tickMargin={16}
                domain={domain}
              />
              <Tooltip
                cursor={false}
                content={<CustomTooltip />}
                offset={20}
                isAnimationActive={true}
              />
              <Bar
                dataKey="revenue"
                maxBarSize={48}
                shape={<CustomBar />}
                activeBar={<ActiveBar />}
                background={{ fill: "#f4f4f5", radius: 12 }}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
