import Divider from "../Divider/Divider";

interface IProps {
  history: Array<{
    pass: string;
    date: number;
  }>;
}

const PasswordHistory = ({ history = [] }: IProps) => {
  const isEmpty = history.length === 0;
  console.log(history, isEmpty);
  return (
    <div className="fixed top-0 left-0 h-full w-full z-10 outline-none overflow-x-hidden overflow-y-auto bg-[#848A9775] p-4">
      <div className="bg-white dark:bg-lightNavy rounded-sm min-w-[150] max-w-lg m-auto mt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-xl m-4 dark:text-lightSlate">PASSWORD HISTORY</h2>
          <button className="text-xl m-4 dark:text-slate">x</button>
        </div>
        <Divider />
        <div className="p-4">
          {isEmpty && (
            <p className="dark:text-lightSlate">
              There are no passwords to list.
            </p>
          )}
        </div>
        <Divider />
        <div className="flex justify-between items-center p-4">
          <button className="p-2 border-2 dark:border-lightSlate rounded-md hover:bg-gray-200 dark:hover:bg-lightestSlate dark:bg-slate">
            Close
          </button>
          <button className="p-2 border-2 dark:border-lightSlate rounded-md bg-white  text-red-600 hover:bg-red-600 hover:text-white ">
            {trashSVG}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordHistory;

const trashSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);
