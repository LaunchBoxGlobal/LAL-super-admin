const StatsLoader = () => {
  return (
    <div className="w-full flex items-center gap-5 flex-wrap mt-5 relative z-40">
      {[1, 2, 3].map((_, i) => {
        return (
          <div
            key={i}
            className="w-full max-w-[250px] bg-white custom-shadow rounded-[20px] p-5 relative flex items-center justify-between gap-3 flex-wrap z-30"
          >
            <div className="">
              <h2 className="bg-gray-200 animate-pulse h-4 w-32 rounded"></h2>
              <p className="bg-gray-200 animate-pulse h-6 w-16 rounded mt-2"></p>
            </div>
            <div className="bg-gray-200 animate-pulse h-16 w-16 rounded"></div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsLoader;
