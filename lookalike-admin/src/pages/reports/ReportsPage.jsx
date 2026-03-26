import SearchField from "../../components/ui/SearchField";
import SuspendedUserModal from "../../components/ui/SuspendedUserModal";
import { useState } from "react";
import SuspendUserConfirmationModal from "../../components/ui/SuspendUserConfirmationModal";
import ReportsTable from "./ReportsTable";
import {
  useUnsuspendUserMutation,
  useGetReportsQuery,
  useSuspendUserMutation,
} from "../../services/reportApi";
import { enqueueSnackbar } from "notistack";
import TableSkeleton from "../../components/ui/TableSkeleton";
import Pagination from "../../components/ui/Pagination";
import MediaModal from "../../components/ui/MediaModal";
import { useSearchParams } from "react-router-dom";

const ReportsPage = () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [report, setReport] = useState(null);
  const [openMediaModal, setOpenMediaModal] = useState(false);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const page = searchParams.get("page") || "";

  const toggleUserModal = () => setIsUserModalOpen((prev) => !prev);

  const toggleConfirmationModal = () =>
    setIsConfirmationModalOpen((prev) => !prev);

  const { data, isLoading, isFetching, isError, error, refetch } =
    useGetReportsQuery(
      {
        search,
        page: Number(page),
      },
      {
        refetchOnReconnect: true,
        refetchOnMountOrArgChange: true,
        // refetchOnFocus: true,
      },
    );

  const reports = data?.result?.data;
  const pagination = data?.result?.pagination;

  const [suspendUser] = useSuspendUserMutation();

  const handleSuspend = async () => {
    if (!report?.reported?.id) {
      enqueueSnackbar("Report ID not found.", { variant: "error" });
      return;
    }
    try {
      await suspendUser(report?.reported?.id);
      enqueueSnackbar("User has been suspended", {
        variant: "success",
      });
      setIsConfirmationModalOpen(false);
    } catch (error) {}
  };

  if (isLoading || isFetching) {
    return (
      <section className="w-full relative min-h-screen">
        <Header />
        <TableSkeleton />
      </section>
    );
  }

  if (isError) {
    return (
      <section className="w-full relative min-h-screen">
        <Header />
        <div className="w-full mt-10 border-radius p-4 pt-10 text-center">
          <h3 className="text-gray-600 font-semibold text-lg">
            Failed to load reports
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            {error?.data?.message ||
              "Something went wrong while fetching reports."}
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
      <div className="w-full flex items-center justify-between gap-3 flex-wrap">
        <h2 className="page-title">Reports</h2>
        <SearchField />
      </div>

      {reports?.length > 0 ? (
        <ReportsTable
          toggleUserModal={toggleUserModal}
          reports={reports}
          setReport={setReport}
        />
      ) : (
        <div className="flex items-center justify-center pt-80">
          <p className="text-[(--secondary-text)]">No reports found</p>
        </div>
      )}

      {isUserModalOpen && (
        <SuspendedUserModal
          toggleUserModal={toggleUserModal}
          toggleConfirmationModal={toggleConfirmationModal}
          title={"User Report"}
          buttonText={"Suspend User"}
          report={report}
          setReport={setReport}
          setOpenMediaModal={setOpenMediaModal}
        />
      )}

      {isConfirmationModalOpen && (
        <SuspendUserConfirmationModal
          title={"Suspend User"}
          description={"Are you sure you want to suspend this user?"}
          onClose={toggleConfirmationModal}
          onClick={handleSuspend}
        />
      )}

      {openMediaModal && report && (
        <MediaModal
          onclose={() => setOpenMediaModal(false)}
          media={report?.media}
        />
      )}

      {!isLoading && !isError && <Pagination pagination={pagination} />}
    </section>
  );
};

export default ReportsPage;

const Header = () => {
  return (
    <section className="w-full relative">
      <div className="w-full flex items-center justify-between gap-3 flex-wrap">
        <h2 className="page-title">Reports</h2>
        <SearchField />
      </div>
    </section>
  );
};
