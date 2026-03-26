const ChartSkeleton = () => {
  return (
    <div className="w-full bg-white rounded-[20px] custom-shadow animate-pulse z-40">
      {/* Header */}
      <div className="w-full px-5 pt-5">
        <div className="h-4 w-24 bg-gray-200 rounded" />
        <div className="h-6 w-40 bg-gray-300 rounded mt-3" />
      </div>

      <div className="w-full border my-5" />

      {/* Skeleton rows */}
      <div className="w-full px-5 pb-8 space-y-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-full flex gap-3 items-center justify-between"
          >
            {/* Country name */}
            <div className="min-w-[13%]">
              <div className="h-4 w-16 bg-gray-300 rounded" />
            </div>

            {/* Progress bar */}
            <div className="w-full">
              <div className="w-full h-[12px] rounded-[4px] bg-gray-200">
                <div
                  className="h-[12px] rounded-[4px] bg-gray-300"
                  style={{ width: `${Math.floor(Math.random() * 70) + 20}%` }}
                />
              </div>
            </div>

            {/* Percentage */}
            <div className="min-w-[8%] text-center">
              <div className="h-4 w-10 bg-gray-300 rounded mx-auto" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartSkeleton;
