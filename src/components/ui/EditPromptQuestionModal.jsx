import { useFormik } from "formik";
import { useEffect, useRef } from "react";
import * as Yup from "yup";
import { useUpdatePromptMutation } from "../../services/promptQuery";
import { enqueueSnackbar } from "notistack";
import ButtonLoader from "./ButtonLoader";

const EditPromptQuestionModal = ({
  toggleEditPromptModal,
  selectedPrompt,
  setSelectedPrompt,
}) => {
  const modalRef = useRef(null);
  const [updatePrompt, { isLoading }] = useUpdatePromptMutation();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        toggleEditPromptModal();
        setSelectedPrompt(null);
      }
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        toggleEditPromptModal();
        setSelectedPrompt(null);
      }
    };

    document.addEventListener("keydown", handleEsc);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      question: selectedPrompt?.question || "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      question: Yup.string()
        .min(10, "Minimum 10 characters required.")
        .max(150, "Maximum 150 characters allowed.")
        .required("Question is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        if (!selectedPrompt || !selectedPrompt?.id) {
          enqueueSnackbar(`Prompt ID not found!`, { variant: "error" });
          return;
        }
        const payload = {
          question: values.question,
          id: selectedPrompt?.id,
        };
        await updatePrompt(payload).unwrap();
        enqueueSnackbar("Prompt has been updated.", { variant: "success" });
      } catch (error) {
        console.error("Update prompt error >>> ", error);
      }

      resetForm();
      toggleEditPromptModal();
      setSelectedPrompt(null);
    },
  });

  return (
    <main className="w-full min-h-screen flex items-center justify-center fixed inset-0 z-50 bg-[rgba(0,0,0,0.3)] px-4">
      <div
        ref={modalRef}
        className="w-full max-w-[471px] p-6 lg:p-8 rounded-[32px] relative overflow-hidden bg-white"
      >
        <div className="w-full flex items-center justify-between gap-3 z-10 relative">
          <h2 className="text-[18px] lg:text-[24px] font-semibold leading-none">
            Edit Prompt
          </h2>

          <button
            type="button"
            onClick={() => {
              toggleEditPromptModal();
              setSelectedPrompt(null);
            }}
          >
            <img
              src="/close-icon.svg"
              alt="close-icon"
              width={22}
              height={22}
            />
          </button>
        </div>

        <div className="w-full border border-[#0D1B331A] my-4" />

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="question" className="font-medium text-sm">
              Prompt Question
            </label>

            <input
              type="text"
              name="question"
              id="question"
              value={formik.values.question}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter prompt question"
              className="w-full h-[48px] rounded-[12px] px-4 text-sm bg-white custom-shadow outline-none"
            />

            {formik.touched.question && formik.errors.question && (
              <small className="text-sm text-red-500">
                {formik.errors.question}
              </small>
            )}
          </div>

          <button
            type="submit"
            className="gradient-bg text-white font-medium rounded-[12px] w-full h-[49px]"
          >
            {isLoading ? <ButtonLoader /> : "Save"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default EditPromptQuestionModal;
