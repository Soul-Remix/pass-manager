import copyPassword from "../../utils/copyPassword";

interface IProps {
  pass: string;
  date: number;
}

const PasswordEntry = ({ pass, date }: IProps) => {
  const dateLocal = new Date(date).toLocaleString();
  return (
    <div className="flex justify-between p-2">
      <div>
        <p className="dark:text-white text-[0.9rem]">{pass}</p>
        <p className="dark:text-slate text-sm">{dateLocal}</p>
      </div>
      <button
        className="hover:text-main dark:text-slate hover:dark:text-mainDark"
        onClick={() => copyPassword(pass)}
      >
        {copySVG}
      </button>
    </div>
  );
};

export default PasswordEntry;

const copySVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
);
