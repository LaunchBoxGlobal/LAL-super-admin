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
        {data?.map((c, i) => {
          return (
            <div key={i} className="w-full">
              <div className="w-full flex items-center justify-between">
                <h4 className="text-sm font-medium text-[#888888] leading-none">
                  {c?.ageGroup}
                </h4>
                <p className="text-sm text-[#888888] font-semibold">
                  {c?.percentage}%
                </p>
              </div>
              <div className="w-full mt-1">
                <div className="w-full h-[16px] rounded-[4px] bg-[#F5F5F5] relative overflow-hidden">
                  {/* female line */}
                  <div
                    className={`w-full h-[16px] rounded-[4px] absolute left-0 top-1/2 -translate-y-1/2 z-20`}
                    style={{
                      width: `${c?.femalePercentage}%`,
                      background: "#E0C6FD",
                    }}
                  />
                  {/* male line */}
                  <div
                    className={`w-full h-[16px] rounded-[4px] absolute left-0 top-1/2 -translate-y-1/2 z-10`}
                    style={{
                      width: `${c?.malePercentage}%`,
                      background: "#5E51C9",
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

export default AgeAndGenderChart;
