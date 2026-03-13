import { formatDate } from "../../utils/formatDate";
import { FaCircleUser } from "react-icons/fa6";

const ReportsTable = ({ toggleUserModal, reports, setReport }) => {
  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base mt-10 custom-shadow bg-white rounded-[12px] lg:rounded-[24px] p-2 min-h-screen">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body rounded-base bg-[#408EE8]/20 rounded-[12px] lg:rounded-[24px]">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium rounded-l-[16px]">
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
          {reports?.map((report, i) => {
            return (
              <tr
                key={i}
                className="bg-neutral-primary border-b border-default"
              >
                <td className="px-6 py-4 font-normal whitespace-nowrap flex items-center gap-2">
                  {report?.reporter?.image ? (
                    <img
                      src={report?.reporter?.image}
                      alt="user-profile-image"
                      width={43}
                      height={43}
                      className="w-[43px] max-w-[43px] h-[43px] rounded-full object-cover"
                    />
                  ) : (
                    <FaCircleUser size={41} className="text-gray-700" />
                  )}
                  {report?.reporter?.fullName}
                </td>

                <td className="px-6 py-4 font-normal whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    {report?.reported?.image ? (
                      <img
                        src={report?.reported?.image}
                        alt="user-profile-image"
                        width={43}
                        height={43}
                        className="w-[43px] max-w-[43px] h-[43px] rounded-full object-cover"
                      />
                    ) : (
                      <FaCircleUser size={41} className="text-gray-600" />
                    )}

                    <span className="">{report?.reported?.fullName}</span>
                  </div>
                </td>

                <td className="px-6 py-4">{report?.reason}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatDate(report?.reportedAt)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    type="button"
                    onClick={() => {
                      toggleUserModal();
                      setReport(report);
                    }}
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
