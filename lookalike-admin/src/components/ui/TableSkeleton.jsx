const TableSkeleton = ({ rows = 6 }) => {
  return (
    <div className="relative overflow-x-auto shadow-xs rounded-[12px] lg:rounded-[24px] p-2 min-h-screen bg-white mt-10">
      <table className="w-full text-sm text-left text-body">
        {/* Header */}
        <thead className="text-sm bg-[#408EE8]/20 rounded-[12px] lg:rounded-[24px]">
          <tr>
            <th className="px-6 py-7 font-medium rounded-l-[16px]"></th>
            <th className="px-6 py-7 font-medium"></th>
            <th className="px-6 py-7 font-medium"></th>
            <th className="px-6 py-7 font-medium"></th>
            <th className="px-6 py-7 font-medium"></th>
            <th className="px-6 py-7 font-medium rounded-r-[16px]"></th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {Array.from({ length: rows }).map((_, i) => (
            <tr key={i} className="border-b border-default animate-pulse">
              {/* # */}
              <td className="px-6 py-4">
                <div className="h-4 w-6 bg-gray-200 rounded" />
              </td>

              {/* Name with Avatar */}
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="w-[43px] h-[43px] rounded-full bg-gray-200 min-w-[43px]" />
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                </div>
              </td>

              {/* Email */}
              <td className="px-6 py-4">
                <div className="h-4 w-48 bg-gray-200 rounded" />
              </td>

              {/* Age */}
              <td className="px-6 py-4">
                <div className="h-4 w-10 bg-gray-200 rounded" />
              </td>

              {/* Gender */}
              <td className="px-6 py-4">
                <div className="h-4 w-16 bg-gray-200 rounded" />
              </td>

              {/* Occupation */}
              <td className="px-6 py-4">
                <div className="h-4 w-36 bg-gray-200 rounded" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;
