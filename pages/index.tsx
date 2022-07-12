import type { NextPage } from "next";
import Head from "next/head";
import PasswordInput from "../components/PasswordInput/PasswordInput";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Password Strength</title>
        <meta name="description" content="Test your password strength" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="p-8 flex flex-wrap flex-col items-center justify-center h-full bg-white dark:bg-navy dark:text-lightSlate">
        <h1 className="text-center text-3xl md:text-4xl font-bold">
          Brute Force Attack Estimation
        </h1>
        <p className="text-center text-xl md:text-2xl leading-6 max-w-prose mt-4 mb-4 ">
          Brute-force attacks work by calculating every possible combination
          that could make up a password and testing it to see if it is the
          correct password.
        </p>
        <PasswordInput />
      </section>
    </>
  );
};

export default Home;
