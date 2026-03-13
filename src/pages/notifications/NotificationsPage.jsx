import { useState } from "react";
import SearchField from "../../components/ui/SearchField";
import SendNotificationModal from "../../components/ui/SendNotificationModal";
import NotificationsTable from "./NotificationsTable";
import DeleteNotificationConfirmationModal from "../../components/ui/DeleteNotificationConfirmationModal";
import {
  useDeleteNotificationMutation,
  useGetNotificationsQuery,
} from "../../services/notificationApi";
import TableSkeleton from "../../components/ui/TableSkeleton";
import EmptyDataPlaceholder from "../../components/ui/EmptyDataPlaceholder";
import { enqueueSnackbar } from "notistack";
import { useSearchParams } from "react-router-dom";

const NotificationsPage = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const [openSendNotificationModal, setOpenSendNotificationModal] =
    useState(false);
  const [openDeleteNotificationModal, setOpenDeleteNotificationModal] =
    useState(false);
  const [announcementId, setAnnouncementId] = useState(null);

  const toggleSendModal = () => setOpenSendNotificationModal((prev) => !prev);

  const { data, isLoading, isError, error, isFetching, refetch } =
    useGetNotificationsQuery(
      {
        search,
        page: 1,
        limit: 10,
      },
      {
        refetchOnReconnect: true,
        refetchOnMountOrArgChange: true,
      },
    );

  const notifications = data?.result?.data || [];
  const pagination = data?.result?.pagination;

  const [deleteNotification, { isLoading: isDeleting }] =
    useDeleteNotificationMutation();

  const handleDeleteNotification = async () => {
    if (!announcementId || announcementId === undefined) return;
    try {
      await deleteNotification(announcementId).unwrap();
      enqueueSnackbar("Announcement has been deleted successfully", {
        variant: "success",
      });
      setOpenDeleteNotificationModal(false);
    } catch (error) {}
  };

  if (isLoading) {
    return (
      <section className="w-full relative min-h-screen">
        <Header toggleSendModal={toggleSendModal} />
        <TableSkeleton />
      </section>
    );
  }

  if (isError) {
    return (
      <section className="w-full relative min-h-screen">
        <Header toggleSendModal={toggleSendModal} />
        <div className="w-full mt-10 border-radius p-4 pt-10 text-center">
          <h3 className="text-gray-600 font-semibold text-lg">
            Failed to load notifications
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            {error?.data?.message ||
              "Something went wrong while fetching notifications."}
          </p>

          <button
            onClick={refetch}
            className="mt-5 px-5 py-2 gradient-bg text-white rounded-[10px] transition"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full relative min-h-screen">
      <Header toggleSendModal={toggleSendModal} />

      {isFetching && (
        <div className="text-xs text-gray-400 mt-2">
          Updating notifications...
        </div>
      )}

      {notifications.length === 0 ? (
        <EmptyDataPlaceholder message="No notifications available" />
      ) : (
        <NotificationsTable
          notifications={notifications}
          pagination={pagination}
          setOpenDeleteNotificationModal={setOpenDeleteNotificationModal}
          setAnnouncementId={setAnnouncementId}
        />
      )}

      {openSendNotificationModal && (
        <SendNotificationModal toggleModal={toggleSendModal} />
      )}

      {openDeleteNotificationModal && (
        <DeleteNotificationConfirmationModal
          onClick={handleDeleteNotification}
          onClose={() => setOpenDeleteNotificationModal((prev) => !prev)}
        />
      )}
    </section>
  );
};

const Header = ({ toggleSendModal }) => (
  <div className="w-full flex items-start justify-between gap-3 gap-y-5 flex-wrap">
    <h2 className="page-title">Notifications</h2>

    <div className="w-full md:w-[60%] flex items-center gap-2 justify-end flex-wrap md:flex-nowrap gap-y-3">
      <SearchField />
      <button
        type="button"
        onClick={toggleSendModal}
        className="h-[41px] gradient-bg px-4 text-white text-base font-medium rounded-[8px] whitespace-nowrap"
      >
        Send New Notification
      </button>
    </div>
  </div>
);

export default NotificationsPage;
