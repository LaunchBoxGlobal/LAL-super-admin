import { GoDotFill } from "react-icons/go";
import { AGE_GENDER_STATS } from "../../constants/ageGenderStats";

const AgeAndGenderChart = ({ data }) => {
  return (
    <div className="w-full bg-white rounded-[20px] custom-shadow relative z-[2000]">
      <div className="w-full px-5 pt-5">
        <div className="">
          <span className="text-[var(--secondary-text)] font-medium">
            Statistics
          </span>
          <div className="w-full flex items-center justify-between gap-3 flex-wrap">
            <h3 className="text-[18px] md:text-[21px] lg:text-[24px] mt-2 lg:mt-1 font-semibold leading-none">
              Age and Gender
            </h3>
            <div className="w-full max-w-[188px] flex items-center justify-between gap-1 h-[49px] bg-[#ffff] rounded-[14px]">
              <div className="flex items-center gap-1">
                <GoDotFill size={25} color="#5E51C9" />
                <p className="font-medium text-lg">Male</p>
              </div>
              <div className="flex items-center gap-1">
                <GoDotFill size={25} color="#E0C6FD" />
                <p className="font-medium text-lg">Female</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border my-5" />

      <div className="w-full px-5 pb-8 space-y-4">
        {data?.map((c, i) => (
          <div key={i} className="w-full">
            {/* Header */}
            <div className="w-full flex items-center justify-between">
              <h4 className="text-sm font-medium text-[#888888] leading-none">
                {c?.ageGroup}
              </h4>
              <p className="text-sm text-[#888888] font-semibold">
                {c?.percentage}%
              </p>
            </div>

            {/* Progress */}
            <div className="w-full mt-1 relative">
              {/* Gray Track — overflow-hidden removed */}
              <div className="w-full h-[16px] rounded-[4px] bg-[#F5F5F5]">
                {/* Colored Progress */}
                <div
                  className="h-full flex transition-all duration-500"
                  style={{
                    width: `${c?.percentage}%`,
                    minWidth: c?.percentage > 0 ? "20px" : "0px",
                  }}
                >
                  {/* Female */}
                  <div
                    className={`relative h-full group cursor-pointer ${
                      c?.maleCount === 0 ? "rounded-[4px]" : "rounded-l-[4px]"
                    }`}
                    style={{
                      width: `${c?.femalePercentage}%`,
                      background: "#E0C6FD",
                    }}
                  >
                    {c?.femaleCount > 0 && (
                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition z-50">
                        Female: {c?.femaleCount} users
                      </span>
                    )}
                  </div>

                  {/* Male */}
                  <div
                    className={`relative h-full group cursor-pointer ${
                      c?.femaleCount === 0 ? "rounded-[4px]" : "rounded-r-[4px]"
                    }`}
                    style={{
                      width: `${c?.malePercentage}%`,
                      background: "#5E51C9",
                    }}
                  >
                    {c?.maleCount > 0 && (
                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition z-50">
                        Male: {c?.maleCount} users
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgeAndGenderChart;
