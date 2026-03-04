import { useState } from "react";
import SearchField from "../../components/ui/SearchField";
import SendNotificationModal from "../../components/ui/SendNotificationModal";
import NotificationsTable from "./NotificationsTable";
import DeleteNotificationConfirmationModal from "../../components/ui/DeleteNotificationConfirmationModal";
import { useGetNotificationsQuery } from "../../services/notificationApi";

const NotificationsPage = () => {
  const [openSendNotificationModal, setOpenSendNotificationModal] =
    useState(false);
  const [openDeleteNotificationModal, setOpenDeleteNotificationModal] =
    useState(false);

  const toggleModal = () => setOpenSendNotificationModal((prev) => !prev);
  const toggleDeleteNotificationModal = () =>
    setOpenDeleteNotificationModal((prev) => !prev);

  const { data, isLoading, isError } = useGetNotificationsQuery(undefined, {
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });

  const notifications = data?.result?.data;
  const pagination = data?.result?.pagination;

  console.log("notifications >>> ", notifications);

  return (
    <section className="w-full relative min-h-screen">
      <div className="w-full flex items-center justify-between gap-3 flex-wrap">
        <h2 className="page-title">Notifications</h2>
        <div className="w-full md:max-w-[50%] flex items-center gap-2 justify-end">
          <SearchField />
          <button
            type="button"
            onClick={toggleModal}
            className="h-[41px] gradient-bg px-4 text-white text-base font-medium rounded-[8px]"
          >
            Send New Notification
          </button>
        </div>
      </div>

      <NotificationsTable
        notifications={notifications}
        toggleDeleteNotificationModal={toggleDeleteNotificationModal}
      />

      {openSendNotificationModal && (
        <SendNotificationModal toggleModal={toggleModal} />
      )}

      {openDeleteNotificationModal && (
        <DeleteNotificationConfirmationModal
          onClick={toggleDeleteNotificationModal}
          onClose={toggleDeleteNotificationModal}
        />
      )}
    </section>
  );
};

export default NotificationsPage;
