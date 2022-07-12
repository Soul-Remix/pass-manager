import { FormEvent, useState } from "react";

const PasswordInput = () => {
  const [value, setValue] = useState("");

  const onChange = (input: string) => {
    setValue(input);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <form
      className="flex flex-wrap items-center justify-center"
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
        className="mt-8 p-4 bg-main dark:bg-mainDark text-black rounded-lg shadow-md text-lg"
      >
        Check password
      </button>
    </form>
  );
};

export default PasswordInput;
