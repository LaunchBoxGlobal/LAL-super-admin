import { formatDate } from "../../utils/formatDate";

const NotificationsTable = ({
  toggleDeleteNotificationModal,
  notifications,
}) => {
  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base mt-10 custom-shadow bg-white rounded-[12px] lg:rounded-[24px] p-2">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body rounded-base bg-[#408EE8]/20 rounded-[12px] lg:rounded-[24px]">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium rounded-l-[16px]">
              #
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Name
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Description
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Date
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Time
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Status
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
                <td className="px-6 py-4">1</td>
                <th className="px-6 py-4 font-normal whitespace-nowrap">
                  {notification?.name}
                </th>
                <td className="px-6 py-4">{notification?.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatDate(notification?.createdAt)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">08:00 AM</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`${
                      i !== 3
                        ? "bg-green-100 text-green-500"
                        : "bg-yellow-100 text-yellow-500"
                    } px-2 py-1 rounded-lg text-xs font-medium`}
                  >
                    {i !== 3 ? "Delivered" : "Pending"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button type="button" onClick={toggleDeleteNotificationModal}>
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
