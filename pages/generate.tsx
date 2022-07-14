import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import CheckBox from "../components/CheckBox/CheckBox";
import PasswordHistory from "../components/PasswordHistory/PasswordHistory";
import generatePassword from "../utils/generatePassword";

const passHistory: Array<{ date: number; pass: string }> = [];

const Generate: NextPage = () => {
  const [options, setOptions] = useState({
    lowerCase: true,
    upperCase: true,
    numbers: true,
    symbols: false,
  });
  const [length, setLength] = useState(14);
  const [password, setPassword] = useState("");
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    genPass();
  }, []);

  const onChange = (
    option: "lowerCase" | "upperCase" | "numbers" | "symbols"
  ) => {
    const newOptions = {
      ...options,
      [option]: !options[option],
    };
    if (Object.entries(newOptions).every((x) => x[1] === false)) {
      setOptions({ ...newOptions, lowerCase: true });
      genPass();
    } else {
      setOptions(newOptions);
      genPass();
    }
  };

  const genPass = () => {
    const pass = generatePassword(length, options);
    passHistory.push({ pass, date: Date.now() });
    setPassword(pass);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <>
      <Head>
        <title>Password Generator</title>
      </Head>
      <section className="p-8 bg-white dark:bg-navy dark:text-lightSlate">
        <h1 className="text-center text-3xl md:text-4xl font-bold m-auto mt-8">
          Password Generator
        </h1>
        <div className="bg-slate dark:bg-white p-3 mt-8 rounded-lg shadow-md">
          <p className="text-center text-xl text-black">{password}</p>
        </div>
        <p className="mt-8 mb-2 text-lg">Length</p>
        <input
          type="number"
          className="text-md text-black p-2 border-black border-2 rounded-md"
          value={length}
          maxLength={99}
          onChange={(s) => setLength(+s.currentTarget.value)}
        />
        <p className="mt-8 mb-2 text-lg">Options</p>
        {optionsArr.map((x) => (
          <CheckBox
            id={x.id}
            label={x.label}
            onChange={() => onChange(x.id)}
            value={options[x.id]}
          />
        ))}
        <div className="flex justify-between">
          <div className="flex gap-8">
            <Button onClick={genPass}>Regenerate password</Button>
            <Button onClick={copyPassword} className="bg-slate dark:bg-slate">
              Copy password
            </Button>
          </div>
          <Button className="bg-slate dark:bg-slate">{ClockSvg}</Button>
        </div>
      </section>
      <PasswordHistory history={passHistory} />
    </>
  );
};

export default Generate;

const optionsArr = [
  { id: "lowerCase", label: "a-z" },
  { id: "upperCase", label: "A-Z" },
  { id: "numbers", label: "0-9" },
  { id: "symbols", label: " !@#$%^&* " },
] as const;

const ClockSvg = (
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
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
