import { useState } from "react";
import { useGetStatsQuery } from "../../services/dashboardApi";
import AgeAndGenderChart from "./AgeAndGenderChart";
import ChartSkeleton from "./ChartSkeleton";
import DashboardStats from "./DashboardStats";
import OccupationUsageChart from "./OccupationUsageChart";
import PopularCountriesChart from "./PopularCountriesChart";
import StatsLoader from "./StatsLoader";
import Cookies from "js-cookie";

const DashboardPage = () => {
  const [chartType, setChartType] = useState("annually");
  const admin = JSON.parse(Cookies.get("look_alike_admin"));
  // console.log(admin);

  const { data, isLoading, isError, error } = useGetStatsQuery(
    {
      occupationUseage: chartType,
    },
    {
      refetchOnReconnect: true,
      refetchOnMountOrArgChange: true,
      // refetchOnFocus: true,
    },
  );

  return (
    <section className="w-full min-h-screen relative bg-white">
      <p className="text-[#888888] font-medium">
        Hello {admin && admin?.fullName}
      </p>
      <h1 className="page-title">
        Welcome to <span className="">LookAlike</span>
      </h1>

      {isLoading ? <StatsLoader /> : <DashboardStats stats={data?.result} />}

      {/* <ChartSkeleton /> */}
      {isLoading ? (
        <div className="w-full flex flex-wrap items-start gap-5 mt-7">
          <div className="w-full md:w-[47%] lg:w-[49%] space-y-5">
            <ChartSkeleton />
            <ChartSkeleton />
          </div>
          <div className="w-full md:w-[47%] lg:w-[49%]">
            <ChartSkeleton />
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-wrap items-start gap-5 mt-7">
          <div className="w-full md:w-[47%] lg:w-[48%] space-y-5">
            <PopularCountriesChart data={data?.result?.popularCountries} />
            <AgeAndGenderChart data={data?.result?.ageAndGender} />
          </div>
          <div className="w-full md:w-[47%] lg:w-[48%]">
            <OccupationUsageChart
              data={data?.result?.occupationUsage}
              chartType={chartType}
              setChartType={setChartType}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default DashboardPage;
