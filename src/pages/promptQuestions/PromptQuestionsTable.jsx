import { HiMiniPencilSquare } from "react-icons/hi2";

const PromptQuestionsTable = ({
  toggleDeletePromptQuestionModal,
  toggleEditPromptModal,
}) => {
  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base mt-10 custom-shadow bg-white rounded-[12px] lg:rounded-[24px] p-2">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body rounded-base bg-[#408EE8]/20 rounded-[12px] lg:rounded-[24px]">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium rounded-l-[16px]">
              #
            </th>

            <th scope="col" className="px-6 py-4 font-medium">
              Prompt Question
            </th>

            <th
              scope="col"
              className="px-6 py-4 font-medium text-end rounded-r-[16px]"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((_, i) => {
            return (
              <tr
                key={i}
                className="bg-neutral-primary border-b border-default"
              >
                <td className="px-6 py-4">1</td>

                <td className="px-6 py-4 whitespace-nowrap">
                  A Book That Changed My Perspective Is...
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-end pr-9 space-x-2">
                  <button type="button" onClick={toggleEditPromptModal}>
                    <HiMiniPencilSquare
                      size={21}
                      className="text-[var(--secondary-text)]"
                    />
                  </button>
                  <button
                    type="button"
                    onClick={toggleDeletePromptQuestionModal}
                  >
                    <img
                      src="/trash-icon.svg"
                      alt="trash-icon"
                      width={18}
                      height={21}
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PromptQuestionsTable;
