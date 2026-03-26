import { useState } from "react";
import { useAddPromptMutation } from "../../services/promptQuery";
import { enqueueSnackbar } from "notistack";
import ButtonLoader from "./ButtonLoader";

const AddNewPromptQuestionModal = ({ toggleModal }) => {
  const [promptQuestion, setPromptQuestion] = useState("");
  const [error, setError] = useState("");
  const [addPromptQuestion, { isLoading }] = useAddPromptMutation();

  const validateField = (value) => {
    let message = "";

    const trimmedValue = value.trim();

    if (!trimmedValue) {
      message = "Prompt question is required.";
    } else if (trimmedValue.length < 10) {
      message = "Minimum 10 characters required.";
    } else if (trimmedValue.length > 150) {
      message = "Maximum 150 characters allowed.";
    }

    setError(message);
    return !message;
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    setPromptQuestion(value);
    validateField(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateField(promptQuestion);
    if (!isValid) return;
    const payload = {
      question: promptQuestion,
    };
    const res = await addPromptQuestion(payload).unwrap();

    enqueueSnackbar(res?.message || "Prompt has been saved successfully", {
      variant: "success",
    });

    console.log("promptQuestion value:", promptQuestion);
    setPromptQuestion("");
    toggleModal();
  };
  return (
    <main className="w-full min-h-screen flex items-center justify-center fixed inset-0 z-50 bg-[rgba(0,0,0,0.3)] px-4">
      <div className="w-full max-w-[471px] p-6 lg:p-8 rounded-[32px] relative overflow-hidden bg-white">
        <div className="w-full flex items-center justify-between gap-3 z-10 relative">
          <h2 className="text-[18px] lg:text-[24px] font-semibold leading-none">
            Add New Prompt
          </h2>

          <button type="button" onClick={toggleModal} className="relative z-10">
            <img
              src="/close-icon.svg"
              alt="close-icon"
              width={22}
              height={22}
            />
          </button>
        </div>

        <div className="w-full border border-[#0D1B331A] my-4" />

        <form
          onSubmit={handleSubmit}
          className="w-full relative z-10 space-y-4"
        >
          <div className="w-full space-y-1">
            <label htmlFor="promptQuestion" className="font-medium text-sm">
              Prompt Question
            </label>
            <input
              type="text"
              id="promptQuestion"
              value={promptQuestion}
              onChange={handleOnChange}
              placeholder="Enter prompt question"
              className="w-full h-[48px] rounded-[12px] px-4 text-sm text-[var(--secondary-text)] bg-white custom-shadow outline-none"
            />

            {error && <small className="text-red-500 px-1">{error}</small>}
          </div>

          <div className="w-full relative z-10">
            <button
              type="submit"
              className="gradient-bg text-white font-medium rounded-[12px] w-full text-center h-[49px] relative z-10"
            >
              {isLoading ? <ButtonLoader /> : "Save"}
            </button>
          </div>
        </form>

        <img
          src="/purple-glow.svg"
          alt="purple-glow"
          className="w-[1390px] h-[646px] absolute z-0 bottom-[-60%] left-[-20%] opacity-40"
        />
        <img
          src="/blue-glow.svg"
          alt="blue-glow"
          className="w-[1390px] h-[646px] absolute z-0 top-[-70%] right-[-20%] opacity-40"
        />
      </div>
    </main>
  );
};

export default AddNewPromptQuestionModal;
