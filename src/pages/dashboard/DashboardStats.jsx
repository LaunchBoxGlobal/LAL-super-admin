const DashboardStats = (stats) => {
  return (
    <div className="w-full flex items-center gap-5 flex-wrap mt-5 relative z-40">
      {/* total users */}
      <div className="w-full md:max-w-[250px] bg-white custom-shadow rounded-[20px] p-5 relative flex items-center justify-between gap-3 flex-wrap z-30">
        <div className="">
          <h2 className="font-medium text-[var(--secondary-text)]">
            Total Users
          </h2>
          <p className="text-[24px] font-semibold">
            {stats?.stats?.totalUsers || 0}
          </p>
        </div>
        <img
          src="/total-users-icon.png"
          alt="total-users-icon"
          width={67}
          height={67}
        />
      </div>

      {/* active users */}
      <div className="w-full md:max-w-[250px] bg-white custom-shadow rounded-[20px] p-5 relative flex items-center justify-between gap-3 flex-wrap z-30">
        <div className="">
          <h2 className="font-medium text-[var(--secondary-text)]">
            Active Users
          </h2>
          <p className="text-[24px] font-semibold">
            {stats?.stats?.totalActiveUsers || 0}
          </p>
        </div>
        <img
          src="/total-users-icon.png"
          alt="total-users-icon"
          width={67}
          height={67}
        />
      </div>

      {/* total matches */}
      <div className="w-full md:max-w-[250px] bg-white custom-shadow rounded-[20px] p-5 relative flex items-center justify-between gap-3 flex-wrap z-30">
        <div className="">
          <h2 className="font-medium text-[var(--secondary-text)]">
            Total Matches
          </h2>
          <p className="text-[24px] font-semibold">
            {stats?.stats?.totalMatches || 0}
          </p>
        </div>
        <img
          src="/total-matches-icon.png"
          alt="total-matches-icon"
          width={67}
          height={67}
        />
      </div>
    </div>
  );
};

export default DashboardStats;
