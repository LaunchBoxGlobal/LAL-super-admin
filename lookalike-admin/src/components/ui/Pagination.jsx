import { useSearchParams } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Pagination = ({ pagination }) => {
  const { totalPages, hasNextPage, hasPrevPage } = pagination;

  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || pagination.page || 1;

  const changePage = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;

    searchParams.set("page", newPage);
    setSearchParams(searchParams);
  };

  const getPages = () => {
    const pages = [];
    const delta = 2;

    const start = Math.max(2, currentPage - delta);
    const end = Math.min(totalPages - 1, currentPage + delta);

    pages.push(1);

    if (start > 2) pages.push("...");

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) pages.push("...");

    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  if (!totalPages || totalPages === 1) return null;

  const pages = getPages();

  return (
    <div className="w-full flex items-center justify-end gap-1 mt-8">
      <button
        disabled={!hasPrevPage}
        className={`rounded px-2 h-8 flex items-center justify-center text-sm font-medium bg-gray-200 hover:text-white hover:bg-gradient-to-r from-[#5E51C9] to-[#408EE8] transition-all duration-200`}
        onClick={() => changePage(currentPage - 1)}
      >
        <MdKeyboardArrowLeft size={20} />
      </button>

      {pages.map((p, i) =>
        p === "..." ? (
          <span key={i} className="dots">
            ...
          </span>
        ) : (
          <button
            key={i}
            className={`rounded w-8 h-8 flex items-center justify-center text-sm font-medium ${currentPage === p ? "gradient-bg text-white" : "bg-gray-100 hover:text-white hover:bg-gradient-to-r from-[#5E51C9] to-[#408EE8] transition-all duration-200"}`}
            onClick={() => changePage(p)}
          >
            {p}
          </button>
        ),
      )}

      <button
        disabled={!hasNextPage}
        className={`rounded px-2 h-8 flex items-center justify-center text-sm font-medium bg-gray-200 hover:text-white hover:bg-gradient-to-r from-[#5E51C9] to-[#408EE8] transition-all duration-200`}
        onClick={() => changePage(currentPage + 1)}
      >
        <MdKeyboardArrowRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
