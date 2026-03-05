import SuspendedUsersTable from "./SuspendedUsersTable";
import SearchField from "../../components/ui/SearchField";
import SuspendedUserModal from "../../components/ui/SuspendedUserModal";
import { useState } from "react";
import SuspendUserConfirmationModal from "../../components/ui/SuspendUserConfirmationModal";
import { useGetUsersQuery } from "../../services/userApi";
import EmptyDataPlaceholder from "../../components/ui/EmptyDataPlaceholder";
import TableSkeleton from "../../components/ui/TableSkeleton";
import { useSearchParams } from "react-router-dom";

const SuspendedUsers = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const toggleUserModal = () => setIsUserModalOpen((prev) => !prev);
  const toggleConfirmationModal = () =>
    setIsConfirmationModalOpen((prev) => !prev);

  const { data, isLoading, isError, error, isFetching, refetch } =
    useGetUsersQuery(
      {
        page: 1,
        search: searchTerm,
        isVerified: true,
        isSuspended: true,
      },
      {
        refetchOnMountOrArgChange: true,
      },
    );

  const users = data?.result?.data || [];
  const pagination = data?.result?.pagination;

  if (isLoading) {
    return (
      <section className="w-full relative min-h-screen">
        <Header />
        <TableSkeleton />
      </section>
    );
  }

  if (isError) {
    return (
      <section className="w-full relative min-h-screen">
        <Header />
        <div className="w-full mt-10 bg-red-50 border border-red-200 rounded-[16px] p-8 text-center">
          <h3 className="text-red-600 font-semibold text-lg">
            Failed to load suspended users
          </h3>
          <p className="text-sm text-red-500 mt-2">
            {error?.data?.message ||
              "Something went wrong while fetching data."}
          </p>

          <button
            onClick={refetch}
            className="mt-5 px-5 py-2 bg-red-600 text-white rounded-[8px] hover:bg-red-700 transition"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full relative min-h-screen">
      <Header />

      {/* Background fetching indicator */}
      {isFetching && !isLoading && (
        <div className="text-xs text-gray-400 mt-2">Updating data...</div>
      )}

      {users.length === 0 ? (
        <EmptyDataPlaceholder message="No suspended users found" />
      ) : (
        <SuspendedUsersTable
          users={users}
          pagination={pagination}
          toggleUserModal={toggleUserModal}
        />
      )}

      {isUserModalOpen && (
        <SuspendedUserModal
          toggleUserModal={toggleUserModal}
          toggleConfirmationModal={toggleConfirmationModal}
          title="Suspended User"
          buttonText="Unsuspend Account"
        />
      )}

      {isConfirmationModalOpen && (
        <SuspendUserConfirmationModal
          title="Unsuspend User"
          description="Are you sure you want to unsuspend this user?"
          onClose={toggleConfirmationModal}
          onClick={toggleConfirmationModal}
        />
      )}
    </section>
  );
};

const Header = () => (
  <div className="w-full flex items-center justify-between gap-3 flex-wrap">
    <h2 className="page-title">Suspended Users</h2>
    <SearchField />
  </div>
);

export default SuspendedUsers;
