const SuspendedUserModal = ({
  toggleUserModal,
  toggleConfirmationModal,
  title,
  buttonText,
}) => {
  return (
    <main className="w-full min-h-screen flex items-center justify-center fixed inset-0 z-50 bg-[rgba(0,0,0,0.3)] px-4">
      <div className="w-full max-w-[471px] p-6 lg:p-6 rounded-[32px] relative overflow-hidden bg-white">
        <div className="w-full flex items-center justify-between gap-3 z-10 relative">
          <h2 className="text-[18px] lg:text-[24px] font-semibold leading-none">
            {title}
          </h2>

          <button type="button" onClick={toggleUserModal}>
            <img
              src="/close-icon.svg"
              alt="close-icon"
              width={22}
              height={22}
            />
          </button>
        </div>

        <div className="w-full border border-[#0D1B331A] my-2" />

        <div className="w-full flex items-start gap-3">
          <div className="w-full max-w-[45%] border-r-2 border-[#0D1B331A]">
            <p className="">Reporter</p>

            <div className="flex items-center gap-2 mt-2">
              <img
                src="/user-profile-image.png"
                alt="user-profile-image"
                width={35}
                height={35}
                className="min-w-[43px] rounded-full object-cover"
              />
              <span className="text-sm font-semibold">Charlotte</span>
            </div>
          </div>
          <div className="w-full pl-5 z-10 relative">
            <p className="">Reported Date</p>

            <div className="flex items-center gap-2 mt-5">
              <span className="text-sm font-semibold">11/11/2023</span>
            </div>
          </div>
        </div>

        <div className="w-full border border-[#0D1B331A] my-2" />

        <div className="w-full z-10 relative pt-2">
          <h4 className="text-sm font-semibold">Description</h4>

          <div className="w-full bg-white rounded-[16px] p-4 mt-2">
            <p className="text-sm leading-[1.4]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        <div className="w-full border border-[#0D1B331A] my-4" />

        <div className="w-full flex items-start gap-3 z-10 relative">
          <div className="w-full max-w-[45%]">
            <p className="">Reported User</p>

            <div className="flex items-center gap-2 mt-2">
              <img
                src="/user-profile-image.png"
                alt="user-profile-image"
                width={35}
                height={35}
                className="min-w-[43px] rounded-full object-cover"
              />
              <span className="text-sm font-semibold">Olivia Ava</span>
            </div>
          </div>
          <div className="w-full pl-5 flex justify-end pt-3.5">
            <button
              type="button"
              onClick={() => {
                toggleConfirmationModal();
                toggleUserModal();
              }}
              className="gradient-bg w-[169px] h-[49px] text-white rounded-[12px] text-sm font-medium"
            >
              {buttonText}
            </button>
          </div>
        </div>

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

export default SuspendedUserModal;
