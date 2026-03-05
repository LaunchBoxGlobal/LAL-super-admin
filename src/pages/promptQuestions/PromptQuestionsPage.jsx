import { useState } from "react";
import SearchField from "../../components/ui/SearchField";
import PromptQuestionsTable from "./PromptQuestionsTable";
import AddNewPromptQuestionModal from "../../components/ui/AddNewPromptQuestionModal";
import DeletePromptQuestionModal from "../../components/ui/DeletePromptQuestionModal";
import EditPromptQuestionModal from "../../components/ui/EditPromptQuestionModal";
import { useGetPromptsQuery } from "../../services/promptQuery";
import { useSearchParams } from "react-router-dom";
import TableSkeleton from "../../components/ui/TableSkeleton";
import EmptyDataPlaceholder from "../../components/ui/EmptyDataPlaceholder";

const PromptQuestionsPage = () => {
  const [openAddNewQuestionModal, setOpenAddNewQuestionModal] = useState(false);
  const [openDeleteQuestionModal, setOpenDeleteQuestionModal] = useState(false);
  const [openEditPromptModal, setOpenEditPromptModal] = useState(false);

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  const { data, isLoading, isError, error, isFetching, refetch } =
    useGetPromptsQuery(
      {
        search: searchTerm,
        page: 1,
        limit: 10,
        skip: 0,
      },
      {
        refetchOnReconnect: true,
        refetchOnMountOrArgChange: true,
      },
    );

  const prompts = data?.result?.data || [];
  const pagination = data?.result?.pagination;

  const toggleAddNewQuestionModal = () =>
    setOpenAddNewQuestionModal((prev) => !prev);

  const toggleDeletePromptQuestionModal = () =>
    setOpenDeleteQuestionModal((prev) => !prev);

  const toggleEditPromptModal = () => setOpenEditPromptModal((prev) => !prev);

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

        <div className="w-full mt-10 bg-red-50 border border-red-200 rounded-[16px] p-8 text-center">
          <h3 className="text-red-600 font-semibold text-lg">
            Failed to load prompt questions
          </h3>

          <p className="text-sm text-red-500 mt-2">
            {error?.data?.message ||
              "Something went wrong while fetching prompts."}
          </p>

          <button
            onClick={refetch}
            className="mt-5 px-5 py-2 bg-red-600 text-white rounded-[8px] hover:bg-red-700 transition"
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

      {/* Background refetch indicator */}
      {isFetching && (
        <div className="text-xs text-gray-400 mt-2">Updating prompts...</div>
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
        />
      )}

      {/* Modals */}
      {openAddNewQuestionModal && (
        <AddNewPromptQuestionModal toggleModal={toggleAddNewQuestionModal} />
      )}

      {openEditPromptModal && (
        <EditPromptQuestionModal
          toggleEditPromptModal={toggleEditPromptModal}
        />
      )}

      {openDeleteQuestionModal && (
        <DeletePromptQuestionModal
          onClick={toggleDeletePromptQuestionModal}
          onClose={toggleDeletePromptQuestionModal}
        />
      )}
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
