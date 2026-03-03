import SuspendedUsersTable from "./SuspendedUsersTable";
import SearchField from "../../components/ui/SearchField";
import SuspendedUserModal from "../../components/ui/SuspendedUserModal";
import { useState } from "react";
import SuspendUserConfirmationModal from "../../components/ui/SuspendUserConfirmationModal";
import { useGetUsersQuery } from "../../services/userApi";
import PageLoader from "../../components/ui/PageLoader";
import EmptyDataPlaceholder from "../../components/ui/EmptyDataPlaceholder";

const SuspendedUsers = () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const toggleUserModal = () => setIsUserModalOpen((prev) => !prev);

  const toggleConfirmationModal = () =>
    setIsConfirmationModalOpen((prev) => !prev);

  const { data, isLoading, isError, error, isFetching } = useGetUsersQuery({
    page: 1,
    search: "",
    isVerified: true,
    isSuspended: true,
  });

  const users = data?.result?.data;
  const pagination = data?.result?.pagination;
  const totalUsers = users?.length;

  return (
    <section className="w-full relative min-h-screen">
      <div className="w-full flex items-center justify-between gap-3 flex-wrap">
        <h2 className="page-title">Suspended Users</h2>
        <SearchField />
      </div>

      {isLoading ? (
        <PageLoader />
      ) : totalUsers > 0 ? (
        <SuspendedUsersTable toggleUserModal={toggleUserModal} />
      ) : (
        <EmptyDataPlaceholder message={"No users found"} />
      )}

      {isUserModalOpen && (
        <SuspendedUserModal
          toggleUserModal={toggleUserModal}
          toggleConfirmationModal={toggleConfirmationModal}
          title={"Suspended User"}
          buttonText={"Unsuspend Account"}
        />
      )}

      {isConfirmationModalOpen && (
        <SuspendUserConfirmationModal
          title={"Unsuspend User"}
          description={"Are you sure you want to unsuspend this user?"}
          onClose={toggleConfirmationModal}
          onClick={toggleConfirmationModal}
        />
      )}
    </section>
  );
};

export default SuspendedUsers;
