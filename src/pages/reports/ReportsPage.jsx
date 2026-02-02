// import SuspendedUsersTable from "./SuspendedUsersTable";
import SearchField from "../../components/ui/SearchField";
import SuspendedUserModal from "../../components/ui/SuspendedUserModal";
import { useState } from "react";
import SuspendUserConfirmationModal from "../../components/ui/SuspendUserConfirmationModal";
import ReportsTable from "./ReportsTable";

const ReportsPage = () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const toggleUserModal = () => setIsUserModalOpen((prev) => !prev);

  const toggleConfirmationModal = () =>
    setIsConfirmationModalOpen((prev) => !prev);

  return (
    <section className="w-full relative min-h-screen">
      <div className="w-full flex items-center justify-between gap-3 flex-wrap">
        <h2 className="page-title">Reports</h2>
        <SearchField />
      </div>

      <ReportsTable toggleUserModal={toggleUserModal} />

      {isUserModalOpen && (
        <SuspendedUserModal
          toggleUserModal={toggleUserModal}
          toggleConfirmationModal={toggleConfirmationModal}
          title={"User Report"}
          buttonText={"Suspend Account"}
        />
      )}

      {isConfirmationModalOpen && (
        <SuspendUserConfirmationModal
          title={"Suspend User"}
          description={"Are you sure you want to suspend this user?"}
          onClose={toggleConfirmationModal}
          onClick={toggleConfirmationModal}
        />
      )}
    </section>
  );
};

export default ReportsPage;
