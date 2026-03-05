import { enqueueSnackbar } from "notistack";
import { useCreateNotificationMutation } from "../../services/notificationApi";
import { createNotificationSchema } from "../../validations/createNotificationSchema";
import Button from "./Button";
import { useFormik } from "formik";

const SendNotificationModal = ({ toggleModal }) => {
  const [createAnnouncement, { isLoading }] = useCreateNotificationMutation();

  const formik = useFormik({
    initialValues: {
      title: "",
      date: "",
      time: "",
      description: "",
    },
    validationSchema: createNotificationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const payload = {
          title: values.title,
          description: values.description,
          scheduledTime: new Date(
            `${values.date}T${values.time}`,
          ).toISOString(),
        };

        const res = await createAnnouncement(payload).unwrap();
        enqueueSnackbar(
          res?.message || "Announcement has been added successfully",
          {
            variant: "success",
          },
        );
        resetForm();
        toggleModal();
      } catch (error) {
        console.error("Notification creation failed:", error);
      }
    },
  });

  return (
    <main className="w-full min-h-screen flex items-center justify-center fixed inset-0 z-[10000] bg-[rgba(0,0,0,0.3)] px-4">
      <div className="w-full max-w-[471px] p-6 lg:p-8 rounded-[32px] relative overflow-hidden bg-white">
        <div className="w-full flex items-center justify-between gap-3 z-10 relative">
          <h2 className="text-[18px] lg:text-[24px] font-semibold leading-none">
            Send Notification
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
          onSubmit={formik.handleSubmit}
          className="w-full relative z-10 space-y-4"
        >
          {/* Title */}
          <div className="w-full space-y-1">
            <label className="font-medium text-sm">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter notification title"
              className="w-full h-[48px] rounded-[12px] px-4 text-sm bg-white custom-shadow outline-none"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.title && formik.errors.title && (
              <p className="text-red-500 text-xs">{formik.errors.title}</p>
            )}
          </div>

          {/* Date & Time */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="w-full space-y-1">
              <label className="font-medium text-sm">Date</label>
              <input
                type="date"
                name="date"
                className="w-full h-[48px] rounded-[12px] px-4 text-sm bg-white custom-shadow outline-none"
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.date && formik.errors.date && (
                <p className="text-red-500 text-xs">{formik.errors.date}</p>
              )}
            </div>

            <div className="w-full space-y-1">
              <label className="font-medium text-sm">Time</label>
              <input
                type="time"
                name="time"
                className="w-full h-[48px] rounded-[12px] px-4 text-sm bg-white custom-shadow outline-none"
                value={formik.values.time}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.time && formik.errors.time && (
                <p className="text-red-500 text-xs">{formik.errors.time}</p>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="w-full space-y-1">
            <label className="font-medium text-sm">Description</label>
            <textarea
              name="description"
              rows="5"
              placeholder="Enter description"
              className="w-full rounded-[12px] p-4 text-sm bg-white custom-shadow outline-none resize-none"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.description && formik.errors.description && (
              <p className="text-red-500 text-xs">
                {formik.errors.description}
              </p>
            )}
          </div>

          <div className="w-full relative z-10">
            <Button type="submit" text="Send" isPending={isLoading} />
          </div>
        </form>

        <img
          src="/purple-glow.svg"
          alt="purple-glow"
          className="w-[1390px] h-[646px] absolute z-0 bottom-[-20%] left-[0%] opacity-40"
        />
        <img
          src="/blue-glow.svg"
          alt="blue-glow"
          className="w-[1390px] h-[646px] absolute z-0 top-[-20%] right-[0%] opacity-40"
        />
      </div>
    </main>
  );
};

export default SendNotificationModal;
