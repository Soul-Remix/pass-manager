import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import IPasswordApiResponse from "../../types/passwordApiResponse";

interface IProps {
  isLoading: boolean;
  setError: Dispatch<SetStateAction<string>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setData: Dispatch<SetStateAction<IPasswordApiResponse | null>>;
}

const PasswordInput = ({
  setError,
  setData,
  setIsLoading,
  isLoading,
}: IProps) => {
  const [value, setValue] = useState("");

  const onChange = (input: string) => {
    setValue(input);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (value.length === 0) {
      setError("Password can't be empty");
      return;
    }
    setIsLoading(true);
    setError("");
    const body = JSON.stringify({ password: value });
    try {
      const res = await fetch("/api/password", { method: "POST", body });
      const data: IPasswordApiResponse = await res.json();
      if (res.status !== 200) {
        throw new Error(data.message);
      }
      setValue("");
      setIsLoading(false);
      setData(data);
    } catch (err: any) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  return (
    <form
      className="flex flex-col flex-wrap items-center justify-center"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        placeholder="Enter your password"
        maxLength={99}
        spellCheck={false}
        className="text-xl rounded-md p-4 shadow-md mt-8 text-black"
        value={value}
        onChange={(s) => onChange(s.currentTarget.value)}
      />
      <button
        onClick={onSubmit}
        disabled={isLoading}
        className="mt-8 mb-6 p-4 bg-main dark:bg-mainDark text-black rounded-lg shadow-md text-lg flex justify-center items-center"
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing
          </>
        ) : (
          "Check password"
        )}
      </button>
    </form>
  );
};

export default PasswordInput;
