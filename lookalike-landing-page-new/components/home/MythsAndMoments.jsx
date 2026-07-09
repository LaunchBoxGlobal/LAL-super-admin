import MythsSlider from "./MythsSlider";
import SwiperMythsSlider from "./SwiperMythsSlider";

const MythsAndMoments = () => {
  return (
    <section className="w-full pt-10 pb-10 lg:pb-28 flex flex-col items-center relative padding-x">
      <div className="w-[600px] h-[600px] rounded-full blur-[300px] bg-indigo-500 absolute top-[10%] left-[-15%] z-0 opacity-60" />

      <div
        id="myths-moments"
        className="w-full flex flex-col items-center gap-4 text-center relative z-20"
      >
        <div className="">
          <span className="font-semibold text-xs px-5 py-2 glass-card rounded-xl text-[#5E51C9]">
            MYTHS & MOMENTS
          </span>
        </div>
        <h2 className="text-4xl lg:text-[58px] font-semibold leading-[1.2] text-center">
          The Internet Has Theories <br className="hidden lg:block" /> About{" "}
          <span className="gradient-text">LookAlikes</span>
        </h2>
        <p className="secondary-text text-lg max-w-[700px]">
          Myths, stranger moments, chat arguments. This section should feel
          swipeable, curious, and a little addictive.
        </p>
      </div>

      {/* <MythsSlider /> */}
      <SwiperMythsSlider />
    </section>
  );
};

export default MythsAndMoments;
