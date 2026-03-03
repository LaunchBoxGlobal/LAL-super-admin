import { POPULAR_COUNTRIES_STATS } from "../../constants/popularCountriesStats";

const PopularCountriesChart = () => {
  return (
    <div className="w-full bg-white rounded-[20px] custom-shadow">
      <div className="w-full px-5 pt-5">
        <span className="text-[var(--secondary-text)] font-medium">
          Statistics
        </span>
        <h3 className="text-[18px] md:text-[21px] lg:text-[24px] font-semibold mt-1.5">
          Popular countries
        </h3>
      </div>

      <div className="w-full border my-5" />

      <div className="w-full px-5 pb-8 space-y-4">
        {POPULAR_COUNTRIES_STATS?.map((c, i) => {
          return (
            <div
              key={c?.country}
              className="w-full flex gap-3 items-center justify-between"
            >
              <div className="min-w-[13%]">
                <h4 className="text-sm font-medium leading-none">
                  {c?.country}
                </h4>
              </div>
              <div className="w-full">
                <div className="w-full h-[12px] rounded-[4px] bg-white">
                  <div
                    className={`w-full h-[12px] rounded-[4px]`}
                    style={{
                      width: `${c?.percentage}%`,
                      background: c?.color,
                    }}
                  />
                </div>
              </div>
              <div className="min-w-[8%] text-center">
                <p className="text-sm text-[#5E51C9] font-semibold">
                  {c?.percentage}%
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCountriesChart;
