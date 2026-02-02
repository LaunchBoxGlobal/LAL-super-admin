import Button from "./Button";

const SendNotificationModal = ({ toggleModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toggleModal();
  };
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
          onSubmit={handleSubmit}
          className="w-full relative z-10 space-y-4"
        >
          <div className="w-full space-y-1">
            <label htmlFor="title" className="font-medium text-sm">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter notification title"
              className="w-full h-[48px] rounded-[12px] px-4 text-sm text-[var(--secondary-text)] bg-white custom-shadow outline-none"
            />
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="w-full space-y-1">
              <label htmlFor="date" className="font-medium text-sm">
                Date
              </label>
              <input
                type="date"
                // placeholder=""
                className="w-full h-[48px] rounded-[12px] px-4 text-sm text-[var(--secondary-text)] bg-white custom-shadow outline-none"
              />
            </div>
            <div className="w-full space-y-1">
              <label htmlFor="time" className="font-medium text-sm">
                Time
              </label>
              <input
                type="time"
                // placeholder=""
                className="w-full h-[48px] rounded-[12px] px-4 text-sm text-[var(--secondary-text)] bg-white custom-shadow outline-none"
              />
            </div>
          </div>

          <div className="w-full space-y-1">
            <label htmlFor="description" className="font-medium text-sm">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows="5"
              placeholder="Enter description"
              className="w-full rounded-[12px] p-4 text-sm text-[var(--secondary-text)] bg-white custom-shadow outline-none resize-none"
            ></textarea>
          </div>

          <div className="w-full relative z-10">
            <Button type={"submit"} text={"Send"} isPending={false} />
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
