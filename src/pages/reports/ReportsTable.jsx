const ReportsTable = ({ toggleUserModal }) => {
  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base mt-10 custom-shadow bg-white rounded-[12px] lg:rounded-[24px] p-2">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body rounded-base bg-[#408EE8]/20 rounded-[12px] lg:rounded-[24px]">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium rounded-l-[16px]">
              #
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Report ID
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Reporter
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Reported User
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Reason
            </th>
            <th scope="col" className="px-6 py-4 font-medium">
              Date
            </th>
            <th scope="col" className="px-6 py-4 font-medium rounded-r-[16px]">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((_, i) => {
            return (
              <tr
                key={i}
                className="bg-neutral-primary border-b border-default"
              >
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">AD098765</td>
                <td className="px-6 py-4 font-normal whitespace-nowrap flex items-center gap-2">
                  <img
                    src="/user-profile-image.png"
                    alt="user-profile-image"
                    width={43}
                    height={43}
                    className="min-w-[43px] rounded-full object-cover"
                  />
                  Charlotte
                </td>

                <td className="px-6 py-4 font-normal whitespace-nowrap ">
                  <div className="flex items-center gap-2">
                    <img
                      src="/user-profile-image.png"
                      alt="user-profile-image"
                      width={43}
                      height={43}
                      className="min-w-[43px] rounded-full object-cover"
                    />
                    <span className="">Charlotte</span>
                  </div>
                </td>

                <td className="px-6 py-4">
                  Lorem ipsumlabore et dolore magna aliqua...
                </td>
                <td className="px-6 py-4 whitespace-nowrap">20 Sep, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    type="button"
                    onClick={toggleUserModal}
                    className="gradient-text font-medium underline decoration-[#408EE8] text-sm"
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

export default ReportsTable;
