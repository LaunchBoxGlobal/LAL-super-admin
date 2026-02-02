import AgeAndGenderChart from "./AgeAndGenderChart";
import DashboardStats from "./DashboardStats";
import OccupationUsageChart from "./OccupationUsageChart";
import PopularCountriesChart from "./PopularCountriesChart";

const DashboardPage = () => {
  return (
    <section className="w-full min-h-screen relative bg-white">
      <p className="text-[#888888] font-medium">Hello Dave Gray</p>
      <h1 className="page-title">
        Welcome to <span className="">LookAlike</span>
      </h1>
      <DashboardStats />

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 mt-7">
        <PopularCountriesChart />
        <OccupationUsageChart />
        <AgeAndGenderChart />
      </div>
    </section>
  );
};

export default DashboardPage;
