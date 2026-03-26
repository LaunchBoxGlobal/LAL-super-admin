const PopularCountriesChart = ({ data }) => {
  return (
    <div className="w-full bg-white rounded-[20px] custom-shadow">
      <div className="w-full px-5 pt-5">
        <span className="text-[var(--secondary-text)] font-medium">
          Statistics
        </span>
        <h3 className="text-[18px] md:text-[21px] lg:text-[24px] font-semibold mt-1.5">
          Popular Countries
        </h3>
      </div>

      <div className="w-full border my-5" />

      <div className="w-full px-5 pb-8 space-y-4">
        {data?.map((c) => {
          return (
            c?.percentage > 0 && (
              <div
                key={c?.country}
                className="w-full flex gap-3 items-center justify-between"
              >
                {/* Country */}
                <div className="min-w-[13%]">
                  <h4 className="text-sm font-medium leading-none">
                    {c?.country}
                  </h4>
                </div>

                {/* Bar */}
                <div className="w-full">
                  <div className="w-full h-[12px] rounded-[4px] bg-white relative">
                    <div
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-[12px] rounded-[4px] bg-[#5E51C9] group cursor-pointer hover:opacity-90 transition"
                      style={{
                        width: `${c?.percentage}%`,
                        minWidth: "20px",
                      }}
                    >
                      {/* Tooltip */}
                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                        {c?.userCount} users
                      </span>
                    </div>
                  </div>
                </div>

                {/* Percentage */}
                <div className="min-w-[8%] text-center">
                  <p className="text-sm text-[#5E51C9] font-semibold">
                    {c?.percentage}%
                  </p>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default PopularCountriesChart;
