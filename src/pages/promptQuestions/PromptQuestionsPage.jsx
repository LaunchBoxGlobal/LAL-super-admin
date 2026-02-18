import { useState } from "react";
import SearchField from "../../components/ui/SearchField";
import PromptQuestionsTable from "./PromptQuestionsTable";
import AddNewPromptQuestionModal from "../../components/ui/AddNewPromptQuestionModal";
import DeletePromptQuestionModal from "../../components/ui/DeletePromptQuestionModal";
import EditPromptQuestionModal from "../../components/ui/EditPromptQuestionModal";
import { useGetPromptsQuery } from "../../services/promptQuery";
import PageLoader from "../../components/ui/PageLoader";
import { useSearchParams } from "react-router-dom";

const PromptQuestionsPage = () => {
  const [openAddNewQuestionModal, setOpenAddNewQuestionModal] = useState(false);
  const [openDeleteQuestionModal, setOpenDeleteQuestionModal] = useState(false);
  const [openEditPromptModal, setOpenEditPromptModal] = useState(false);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || null;

  const { data, isLoading, isError, error } = useGetPromptsQuery(
    {
      search: searchTerm,
      page: 1,
      limit: 10,
      skip: 0,
    },
    {
      refetchOnReconnect: true,
    },
  );

  const prompts = data?.result?.data;
  const pagination = data?.result?.pagination;

  const toggleAddNewQuestionModal = () =>
    setOpenAddNewQuestionModal((prev) => !prev);

  const toggleDeletePromptQuestionModal = () =>
    setOpenDeleteQuestionModal((prev) => !prev);

  const toggleEditPromptModal = () => setOpenEditPromptModal((prev) => !prev);

  return (
    <section className="w-full relative min-h-screen">
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

      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          {prompts?.length > 0 ? (
            <PromptQuestionsTable
              toggleDeletePromptQuestionModal={toggleDeletePromptQuestionModal}
              toggleEditPromptModal={toggleEditPromptModal}
              prompts={prompts}
            />
          ) : (
            <div className="w-full flex items-center justify-center min-h-[80vh] px-5 relative">
              <h2 className="text-gray-500">No prompts have been added yet.</h2>
            </div>
          )}
        </>
      )}

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

export default PromptQuestionsPage;
