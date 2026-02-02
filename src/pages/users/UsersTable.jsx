const UsersTable = ({ users }) => {
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
              Email Address
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Age
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Gender
            </th>
            <th scope="col" className="px-6 py-4 font-medium rounded-r-[16px]">
              Occupation
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
                <td className="px-6 py-4">1</td>
                <th className="px-6 py-4 font-normal whitespace-nowrap flex items-center gap-2">
                  <img
                    src="/user-profile-image.png"
                    alt="user-profile-image"
                    width={43}
                    height={43}
                    className="min-w-[43px] rounded-full object-cover"
                  />
                  {user?.fullName}
                </th>
                <td className="px-6 py-4 whitespace-nowrap">{user?.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">25</td>
                <td className="px-6 py-4 whitespace-nowrap">Male</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Software Engineer
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
