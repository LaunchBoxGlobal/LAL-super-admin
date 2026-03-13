import { FaCircleUser } from "react-icons/fa6";

const SuspendedUsersTable = ({ toggleUserModal, users, setSuspendedUser }) => {
  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base mt-10 custom-shadow bg-white rounded-[12px] lg:rounded-[24px] p-2 min-h-screen">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body rounded-base bg-[#408EE8]/20 rounded-[12px] lg:rounded-[24px]">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium rounded-l-[16px]">
              Name
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Email
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Reported Reason
            </th>
            <th scope="col" className="px-6 py-4 font-medium rounded-r-[16px]">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, i) => {
            console.log(user);
            return (
              <tr
                key={i}
                className="bg-neutral-primary border-b border-default"
              >
                <th className="px-6 py-4 font-normal whitespace-nowrap flex items-center gap-2">
                  {user?.report?.reported?.image ? (
                    <img
                      src={user?.report?.reported?.image}
                      alt="user-profile-image"
                      width={43}
                      height={43}
                      className="min-w-[43px] w-[43px] h-[43px] rounded-full object-cover"
                    />
                  ) : (
                    <FaCircleUser
                      size={43}
                      className="min-w-[43px] text-gray-700"
                    />
                  )}

                  <span>{user?.name}</span>
                </th>
                <td className="px-6 py-4">{user?.email}</td>
                <td className="px-6 py-4">{user?.report?.reason}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    type="button"
                    onClick={() => {
                      setSuspendedUser(user);
                      toggleUserModal();
                    }}
                    className="gradient-text font-medium underline decoration-[#408EE8]"
                  >
                    View Details
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

export default SuspendedUsersTable;
