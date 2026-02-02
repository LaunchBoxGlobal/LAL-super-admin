import { GoDotFill } from "react-icons/go";

const AgeAndGenderChart = () => {
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
                <GoDotFill size={25} color="#5E51C9" />
                <p className="font-medium text-lg">Female</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border my-5" />

      <div className="w-full px-5 pb-5"></div>
    </div>
  );
};

export default AgeAndGenderChart;
