import { FaCircleUser } from "react-icons/fa6";
import { formatDate } from "../../utils/formatDate";
import { formatMembershipStatus } from "../../utils/formatMembershipStatus";

const UsersTable = ({ users }) => {
  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base mt-10 custom-shadow bg-white rounded-[12px] lg:rounded-[24px] p-2 min-h-screen">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body rounded-base bg-[#408EE8]/20 rounded-[12px] lg:rounded-[24px]">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium rounded-l-[16px]">
              Name
            </th>
            <th scope="col" className="px-6 py-4 font-medium whitespace-nowrap">
              Email Address
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Age
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Gender
            </th>
            <th scope="col" className="px-6 py-4 font-medium whitespace-nowrap">
              Date
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-medium rounded-r-[16px] whitespace-nowrap"
            >
              Membership Status
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, i) => {
            return (
              <tr
                key={i}
                className="bg-neutral-primary border-b border-default"
              >
                <th className="px-6 py-4 font-normal whitespace-nowrap flex items-center gap-2">
                  {user?.profilePicture ? (
                    <img
                      src={user?.profilePicture}
                      alt="user-profile-image"
                      width={43}
                      height={43}
                      className="min-w-[43px] h-[43px] max-h-[43px] rounded-full object-cover"
                    />
                  ) : (
                    <FaCircleUser size={41} className="text-gray-700" />
                  )}

                  {user?.name || "N/A"}
                </th>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user?.email || "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user?.age || "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user?.gender
                    ? user?.gender?.charAt(0).toUpperCase() +
                      user?.gender?.slice(1)
                    : "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatDate(user?.createdAt)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatMembershipStatus(user?.membershipStatus)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
