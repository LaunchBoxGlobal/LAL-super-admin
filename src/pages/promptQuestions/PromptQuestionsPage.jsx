import { useState } from "react";
import SearchField from "../../components/ui/SearchField";
import PromptQuestionsTable from "./PromptQuestionsTable";
import AddNewPromptQuestionModal from "../../components/ui/AddNewPromptQuestionModal";
import DeletePromptQuestionModal from "../../components/ui/DeletePromptQuestionModal";
import EditPromptQuestionModal from "../../components/ui/EditPromptQuestionModal";

const PromptQuestionsPage = () => {
  const [openAddNewQuestionModal, setOpenAddNewQuestionModal] = useState(false);
  const [openDeleteQuestionModal, setOpenDeleteQuestionModal] = useState(false);
  const [openEditPromptModal, setOpenEditPromptModal] = useState(false);

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

      <PromptQuestionsTable
        toggleDeletePromptQuestionModal={toggleDeletePromptQuestionModal}
        toggleEditPromptModal={toggleEditPromptModal}
      />

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
