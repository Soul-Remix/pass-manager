import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import PasswordInput from "../components/PasswordInput/PasswordInput";
import IPasswordApiResponse from "../types/passwordApiResponse";

const Home: NextPage = () => {
  const [data, setData] = useState<IPasswordApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  console.log(error);

  return (
    <>
      <Head>
        <title>Password Strength</title>
        <meta name="description" content="Test your password strength" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="p-8 bg-white dark:bg-navy dark:text-lightSlate">
        <h1 className="text-center text-3xl md:text-4xl font-bold m-auto mt-8">
          Brute Force Attack Estimation
        </h1>
        <p className="text-center text-xl md:text-2xl leading-6 tracking-wider max-w-prose m-auto mt-4 mb-4">
          Brute-force attacks work by calculating every possible combination
          that could make up a password and testing it to see if it is the
          correct password.
        </p>
        {!data && (
          <PasswordInput
            isLoading={loading}
            setIsLoading={setLoading}
            setError={setError}
            setData={setData}
          />
        )}
        {error.length > 0 && (
          <p className="text-red-500 text-lg m-auto text-center">{error}</p>
        )}
      </section>
    </>
  );
};

export default Home;
