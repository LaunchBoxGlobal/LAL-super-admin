import SearchField from "../../components/ui/SearchField";
import { useGetUsersQuery } from "../../services/userApi";
import UsersTable from "./UsersTable";
import TableSkeleton from "../../components/ui/TableSkeleton";
import { useSearchParams } from "react-router-dom";

const UsersPage = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  const { data, isLoading, isError, error, refetch } = useGetUsersQuery(
    {
      page: 1,
      limit: 100,
      search: searchTerm,
      isVerified: true,
      isSuspended: false,
    },
    {
      refetchOnMountOrArgChange: true,
    },
  );

  const users = data?.result?.data || [];

  return (
    <section className="w-full relative min-h-screen">
      <div className="w-full flex items-center justify-between gap-3 flex-wrap">
        <h2 className="page-title">Users</h2>
        <SearchField />
      </div>

      {isLoading && <TableSkeleton />}

      {!isLoading && isError && (
        <div className="w-full mt-10 bg-red-50 border border-red-200 rounded-[16px] p-6 text-center">
          <h3 className="text-red-600 font-semibold text-lg">
            Something went wrong
          </h3>
          <p className="text-sm text-red-500 mt-2">
            {error?.data?.message ||
              "We couldn’t fetch users. Please try again."}
          </p>

          <button
            onClick={refetch}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-[8px] hover:bg-red-700 transition"
          >
            Retry
          </button>
        </div>
      )}

      {!isLoading && !isError && users.length === 0 && (
        <div className="w-full mt-10 bg-gray-50 border border-gray-200 rounded-[16px] p-10 text-center">
          <h3 className="text-gray-700 font-semibold text-lg">
            No Users Found
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            There are no users available at the moment.
          </p>
        </div>
      )}

      {!isLoading && !isError && users.length > 0 && (
        <UsersTable users={users} />
      )}
    </section>
  );
};

export default UsersPage;
