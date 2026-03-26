import { useState } from "react";
import SearchField from "../../components/ui/SearchField";
import PromptQuestionsTable from "./PromptQuestionsTable";
import AddNewPromptQuestionModal from "../../components/ui/AddNewPromptQuestionModal";
import DeletePromptQuestionModal from "../../components/ui/DeletePromptQuestionModal";
import EditPromptQuestionModal from "../../components/ui/EditPromptQuestionModal";
import {
  useDeletePromptMutation,
  useGetPromptsQuery,
} from "../../services/promptQuery";
import { useSearchParams } from "react-router-dom";
import TableSkeleton from "../../components/ui/TableSkeleton";
import EmptyDataPlaceholder from "../../components/ui/EmptyDataPlaceholder";
import { enqueueSnackbar } from "notistack";
import Pagination from "../../components/ui/Pagination";

const PromptQuestionsPage = () => {
  const [openAddNewQuestionModal, setOpenAddNewQuestionModal] = useState(false);
  const [openDeleteQuestionModal, setOpenDeleteQuestionModal] = useState(false);
  const [openEditPromptModal, setOpenEditPromptModal] = useState(false);
  const [promptId, setPromptId] = useState(null);

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const page = searchParams.get("page") || "";

  const [selectedPrompt, setSelectedPrompt] = useState(null);

  const { data, isLoading, isError, error, isFetching, refetch } =
    useGetPromptsQuery(
      {
        search: searchTerm,
        page: Number(page),
        limit: 10,
        skip: 0,
      },
      {
        refetchOnReconnect: true,
        refetchOnMountOrArgChange: true,
        // refetchOnFocus: true,
      },
    );

  const prompts = data?.result?.data || [];
  const pagination = data?.result?.pagination;

  const [deletePrompt, { isLoading: isDeleting }] = useDeletePromptMutation();

  const handleDeletePrompt = async () => {
    if (!promptId) {
      enqueueSnackbar("Prompt ID not found!", { variant: "error" });
      return;
    }
    try {
      await deletePrompt({ promptId }).unwrap();
      enqueueSnackbar("Prompt has been deleted successfully", {
        variant: "success",
      });
      setOpenDeleteQuestionModal(false);
    } catch (error) {}
  };

  const toggleAddNewQuestionModal = () =>
    setOpenAddNewQuestionModal((prev) => !prev);

  const toggleDeletePromptQuestionModal = () => {
    setOpenDeleteQuestionModal((prev) => !prev);
  };

  const toggleEditPromptModal = (prompt) => {
    setSelectedPrompt(prompt);
    setOpenEditPromptModal((prev) => !prev);
  };

  if (isLoading) {
    return (
      <section className="w-full relative min-h-screen">
        <Header toggleAddNewQuestionModal={toggleAddNewQuestionModal} />
        <TableSkeleton />
      </section>
    );
  }

  if (isError) {
    return (
      <section className="w-full relative min-h-screen">
        <Header toggleAddNewQuestionModal={toggleAddNewQuestionModal} />

        <div className="w-full mt-10 bg-white p-8 pt-40 text-center">
          <h3 className="text-gray-600 font-semibold text-lg">
            Failed to load prompt questions
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            {error?.data?.message ||
              "Something went wrong while fetching prompts."}
          </p>

          <button
            onClick={refetch}
            className="mt-5 px-5 py-2 gradient-bg text-white rounded-[8px]"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full relative min-h-screen">
      <Header toggleAddNewQuestionModal={toggleAddNewQuestionModal} />

      {isFetching && (
        <section className="w-full relative min-h-screen">
          <TableSkeleton />
        </section>
      )}

      {prompts.length === 0 ? (
        <EmptyDataPlaceholder
          message={
            searchTerm
              ? "No prompts match your search."
              : "No prompts have been added yet."
          }
        />
      ) : (
        <PromptQuestionsTable
          prompts={prompts}
          pagination={pagination}
          toggleDeletePromptQuestionModal={toggleDeletePromptQuestionModal}
          toggleEditPromptModal={toggleEditPromptModal}
          handleDeletePrompt
          setPromptId={setPromptId}
        />
      )}

      {/* Modals */}
      {openAddNewQuestionModal && (
        <AddNewPromptQuestionModal toggleModal={toggleAddNewQuestionModal} />
      )}

      {openEditPromptModal && (
        <EditPromptQuestionModal
          toggleEditPromptModal={toggleEditPromptModal}
          openEditPromptModal={openEditPromptModal}
          selectedPrompt={selectedPrompt}
          setOpenEditPromptModal={setOpenEditPromptModal}
          setSelectedPrompt={setSelectedPrompt}
        />
      )}

      {openDeleteQuestionModal && (
        <DeletePromptQuestionModal
          onClick={handleDeletePrompt}
          onClose={toggleDeletePromptQuestionModal}
        />
      )}

      {!isLoading && !isError && <Pagination pagination={pagination} />}
    </section>
  );
};

const Header = ({ toggleAddNewQuestionModal }) => (
  <div className="w-full flex items-center justify-between gap-3 flex-wrap">
    <h2 className="page-title">Prompt Questions</h2>

    <div className="w-full md:max-w-[50%] flex items-center gap-2 justify-end flex-wrap">
      <SearchField />
      <button
        type="button"
        onClick={toggleAddNewQuestionModal}
        className="h-[41px] gradient-bg px-4 text-white text-base font-medium rounded-[8px]"
      >
        Add New
      </button>
    </div>
  </div>
);

export default PromptQuestionsPage;
