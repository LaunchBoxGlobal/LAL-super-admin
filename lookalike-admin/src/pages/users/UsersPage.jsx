import SearchField from "../../components/ui/SearchField";
import { useGetUsersQuery } from "../../services/userApi";
import UsersTable from "./UsersTable";
import TableSkeleton from "../../components/ui/TableSkeleton";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../components/ui/Pagination";
import { useState } from "react";
import FilterDropdown from "./FilterDropdown";

const UsersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const page = searchParams.get("page") || 1;

  const [filters, setFilters] = useState({
    membershipStatus: "all",
    minAge: null,
    maxAge: null,
    startDate: null,
    endDate: null,
    gender: "everyone",
    isVerified: "all",
  });

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);

    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    setSearchParams(params);
  };

  const { data, isLoading, isError, error, refetch, isFetching } =
    useGetUsersQuery(
      {
        page: Number(page),
        limit: 2,
        search: searchTerm,
        isSuspended: false,
        ...(filters.isVerified === "all"
          ? { ...filters, isVerified: undefined }
          : filters),
      },
      {
        refetchOnMountOrArgChange: true,
      },
    );

  const users = data?.result?.data || [];
  const pagination = data?.result?.pagination;

  return (
    <section className="w-full relative">
      <div className="w-full flex items-center justify-between gap-3 flex-wrap">
        <h2 className="page-title">
          Users {users && users.length > 0 && `(${pagination?.total})`}
        </h2>

        <div className="flex items-center justify-end gap-2 w-full lg:w-auto">
          <SearchField />
          <FilterDropdown
            onApply={handleApplyFilters}
            initialFilters={filters}
          />
        </div>
      </div>

      {(isLoading || isFetching) && <TableSkeleton />}

      {!isLoading && !isFetching && isError && (
        <div className="w-full mt-10 text-center">
          <h3 className="text-gray-600 font-semibold text-lg">
            Something went wrong
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            {error?.data?.message ||
              "We couldn’t fetch users. Please try again."}
          </p>

          <button
            onClick={refetch}
            className="mt-4 px-4 py-2 gradient-bg text-white rounded-[8px]"
          >
            Retry
          </button>
        </div>
      )}

      {!isLoading && !isFetching && !isError && users.length === 0 && (
        <div className="w-full mt-10 bg-gray-50 border border-gray-200 rounded-[16px] p-10 text-center py-40">
          <h3 className="text-gray-700 font-semibold text-lg">
            No Users Found
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            There are no users available at the moment.
          </p>
        </div>
      )}

      {!isLoading && !isFetching && !isError && users.length > 0 && (
        <UsersTable users={users} />
      )}

      {!isLoading && !isFetching && !isError && pagination && (
        <Pagination pagination={pagination} />
      )}
    </section>
  );
};

export default UsersPage;
