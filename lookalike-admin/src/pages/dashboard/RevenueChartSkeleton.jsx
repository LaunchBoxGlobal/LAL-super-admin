import React from "react";

const RevenueChartSkeleton = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-white custom-shadow rounded-[20px] mt-10 animate-pulse">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <div className="h-7 w-56 bg-gray-200 rounded-md" />
          <div className="h-4 w-44 bg-gray-100 rounded-md mt-3" />
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-50 rounded-[12px] p-1.5 border border-gray-100 self-start md:self-auto gap-2">
          <div className="h-9 w-20 rounded-[12px] bg-gray-200" />
          <div className="h-9 w-20 rounded-[12px] bg-gray-100" />
          <div className="h-9 w-20 rounded-[12px] bg-gray-100" />
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center mb-10 mt-2">
        <div className="w-4 h-4 rounded-md bg-gray-300 mr-2.5" />
        <div className="h-4 w-20 bg-gray-200 rounded-md" />
      </div>

      {/* Chart Skeleton */}
      <div className="h-[400px] w-full flex items-end justify-between px-4 pb-8">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-end h-full flex-1"
          >
            {/* Bar */}
            <div
              className="w-8 rounded-t-xl rounded-b-xl bg-gray-200"
              style={{
                height: `${30 + Math.random() * 60}%`,
              }}
            />

            {/* X-axis Label */}
            <div className="h-3 w-8 bg-gray-100 rounded mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueChartSkeleton;
