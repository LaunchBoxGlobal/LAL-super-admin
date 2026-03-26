import { formatDate } from "../../utils/formatDate";
import { formatTime } from "../../utils/formateTime";

const NotificationsTable = ({
  setOpenDeleteNotificationModal,
  notifications,
  setAnnouncementId,
}) => {
  return (
    <div className="w-full min-h-[90vh] relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base mt-10 custom-shadow bg-white rounded-[12px] lg:rounded-[24px] p-2">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body rounded-base bg-[#408EE8]/20 rounded-[12px] lg:rounded-[24px]">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium rounded-l-[16px]">
              Name
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Description
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Status
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Date
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Time
            </th>
            <th scope="col" className="px-6 py-4 font-medium rounded-r-[16px]">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {notifications?.map((notification, i) => {
            return (
              <tr
                key={i}
                className="bg-neutral-primary border-b border-default"
              >
                <th className="px-6 py-4 font-normal whitespace-nowrap">
                  {notification?.name}
                </th>
                <td className="px-6 py-4">{notification?.description}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-medium ${notification?.status === "pending" ? "bg-yellow-200 text-yellow-500" : notification?.status === "delivered" ? "bg-green-200 text-green-500" : "bg-gray-200 text-gray-500"}`}
                  >
                    {notification?.status.charAt(0).toUpperCase() +
                      notification?.status?.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatDate(notification?.scheduledTime)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatTime(notification?.scheduledTime)}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button
                    type="button"
                    onClick={() => {
                      setAnnouncementId(notification?.id);
                      setOpenDeleteNotificationModal(true);
                    }}
                  >
                    <img
                      src="/trash-icon.svg"
                      alt="trash-icon"
                      width={18}
                      height={21}
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default NotificationsTable;
