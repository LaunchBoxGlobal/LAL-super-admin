const DeleteNotificationConfirmationModal = ({ onClose, onClick }) => {
  return (
    <main className="w-full min-h-screen flex items-center justify-center fixed inset-0 z-50 bg-[rgba(0,0,0,0.3)] px-4">
      <div className="w-full max-w-[471px] p-6 lg:p-9 rounded-[32px] relative overflow-hidden bg-white text-center">
        <img
          src="/delete-notification-modal-icon.png"
          alt="delete-notification-modal-icon"
          width={122}
          height={122}
          className="z-10 relative mx-auto"
        />

        <h3 className="text-lg lg:text-[24px] font-semibold leading-none relative z-10 mt-4">
          Delete Notification
        </h3>

        <p className="text-sm text-[var(--secondary-text)] relative z-10 mt-2">
          Are your sure your want to delete this notification?
        </p>

        <div className="w-full grid grid-cols-2 gap-2 relative z-10 mt-5">
          <button
            type="button"
            onClick={onClose}
            className="bg-white w-full h-[44px] rounded-[12px] text-center font-semibold text-sm"
          >
            No
          </button>
          <button
            type="button"
            onClick={() => onClick()}
            className="gradient-bg text-white w-full h-[44px] rounded-[12px] text-center font-semibold text-sm"
          >
            Yes
          </button>
        </div>

        <img
          src="/purple-glow.svg"
          alt="purple-glow"
          className="w-[1390px] h-[646px] absolute z-0 bottom-[-50%] left-[-10%] opacity-40"
        />
        <img
          src="/blue-glow.svg"
          alt="blue-glow"
          className="w-[1390px] h-[646px] absolute z-0 top-[-50%] right-[-10%] opacity-40"
        />
      </div>
    </main>
  );
};

export default DeleteNotificationConfirmationModal;
