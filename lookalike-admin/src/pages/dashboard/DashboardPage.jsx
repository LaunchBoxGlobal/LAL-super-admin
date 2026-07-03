import { useMemo, useState } from "react";
import Cookies from "js-cookie";

import { useGetStatsQuery } from "../../services/dashboardApi";

import DashboardStats from "./DashboardStats";
import StatsLoader from "./StatsLoader";

import RevenueAnalyticsChart from "./RevenueAnalyticsChart";
import RevenueChartSkeleton from "./RevenueChartSkeleton";

import PopularCountriesChart from "./PopularCountriesChart";
import AgeAndGenderChart from "./AgeAndGenderChart";
import OccupationUsageChart from "./OccupationUsageChart";
import ChartSkeleton from "./ChartSkeleton";

const DashboardPage = () => {
  const [chartType, setChartType] = useState("yearly");
  const [activeTab, setActiveTab] = useState("weekly");

  const admin = useMemo(() => {
    const cookie = Cookies.get("look_alike_admin");
    return cookie ? JSON.parse(cookie) : null;
  }, []);

  const { data, isLoading, isFetching, isError, error } = useGetStatsQuery(
    {
      occupationUseage: chartType,
      revenue: activeTab,
    },
    {
      refetchOnReconnect: true,
      refetchOnMountOrArgChange: true,
    },
  );

  const result = data?.result;

  if (isError) {
    return (
      <section className="w-full min-h-screen flex items-center justify-center">
        <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
          <h2 className="text-lg font-semibold text-red-600">
            Failed to load dashboard
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {error?.data?.message || "Something went wrong. Please try again."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full min-h-screen bg-white">
      <p className="text-[#888888] font-medium">Hello {admin?.fullName}</p>

      <h1 className="page-title">
        Welcome to <span>LookAlike</span>
      </h1>

      {isLoading ? <StatsLoader /> : <DashboardStats stats={result} />}

      {isLoading || isFetching ? (
        <RevenueChartSkeleton />
      ) : (
        <RevenueAnalyticsChart
          data={result?.revenueStats}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      )}

      {isLoading ? (
        <div className="w-full flex flex-wrap gap-5 mt-7">
          <div className="w-full md:w-[47%] lg:w-[48%] space-y-5">
            <ChartSkeleton />
            <ChartSkeleton />
          </div>

          <div className="w-full md:w-[47%] lg:w-[48%]">
            <ChartSkeleton />
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-wrap gap-5 mt-7">
          <div className="w-full md:w-[47%] lg:w-[48%] space-y-5">
            <PopularCountriesChart data={result?.popularCountries} />

            <AgeAndGenderChart data={result?.ageAndGender} />
          </div>

          <div className="w-full md:w-[47%] lg:w-[48%]">
            <OccupationUsageChart
              data={result?.occupationUsage}
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
