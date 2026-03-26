import SuspendedUsersTable from "./SuspendedUsersTable";
import SearchField from "../../components/ui/SearchField";
import { useState } from "react";
import SuspendUserConfirmationModal from "../../components/ui/SuspendUserConfirmationModal";
import { useGetUsersQuery } from "../../services/userApi";
import EmptyDataPlaceholder from "../../components/ui/EmptyDataPlaceholder";
import TableSkeleton from "../../components/ui/TableSkeleton";
import { useSearchParams } from "react-router-dom";
import { useUnsuspendUserMutation } from "../../services/reportApi";
import { enqueueSnackbar } from "notistack";
import SuspendedUser from "../../components/ui/SuspendedUser";
import Pagination from "../../components/ui/Pagination";

const SuspendedUsers = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const page = searchParams.get("page") || "";
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [suspendedUser, setSuspendedUser] = useState(null);

  const toggleUserModal = () => setIsUserModalOpen((prev) => !prev);
  const toggleConfirmationModal = () =>
    setIsConfirmationModalOpen((prev) => !prev);

  const { data, isLoading, isError, error, isFetching, refetch } =
    useGetUsersQuery(
      {
        page: Number(page),
        search: searchTerm,
        isVerified: true,
        isSuspended: true,
      },
      {
        refetchOnReconnect: true,
        refetchOnMountOrArgChange: true,
        // refetchOnFocus: true,
      },
    );

  const users = data?.result?.data || [];
  const pagination = data?.result?.pagination;

  const handleRefetchUsers = () => {
    refetch();
  };

  const [unsuspend, { isLoading: isUnsuspending }] = useUnsuspendUserMutation();

  const handleUnsuspendUser = async () => {
    const reportId = suspendedUser?.report?.id;
    if (!suspendedUser || !reportId) {
      enqueueSnackbar("Report ID not found!", { variant: "error" });
      return;
    }
    try {
      await unsuspend({ userId: suspendedUser?.userId, reportId }).unwrap();
      enqueueSnackbar("User has been unsuspended successfully", {
        variant: "success",
      });
      toggleConfirmationModal();
      setSuspendedUser(null);
      handleRefetchUsers();
    } catch (error) {}
  };

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
        <div className="w-full mt-10 p-8 text-center">
          <h3 className="text-gray-600 font-semibold text-lg">
            Failed to load suspended users
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            {error?.data?.message ||
              "Something went wrong while fetching data."}
          </p>

          <button
            onClick={refetch}
            className="mt-5 px-5 py-2 gradient-bg text-white rounded-[8px]"
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
          setSuspendedUser={setSuspendedUser}
        />
      )}

      {isUserModalOpen && (
        <SuspendedUser
          toggleUserModal={toggleUserModal}
          toggleConfirmationModal={toggleConfirmationModal}
          suspendedUser={suspendedUser}
          setReport={setSuspendedUser}
        />
      )}

      {isConfirmationModalOpen && (
        <SuspendUserConfirmationModal
          title="Unsuspend User"
          description="Are you sure you want to unsuspend this user?"
          onClose={toggleConfirmationModal}
          onClick={handleUnsuspendUser}
        />
      )}
      {!isLoading && !isError && <Pagination pagination={pagination} />}
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
