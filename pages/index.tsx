import type { NextPage } from "next";
import Head from "next/head";
import ResponsiveNavBar from "../components/ResponsiveNavBar/ResponsiveNavBar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Password Strength</title>
        <meta name="description" content="Test your password strength" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveNavBar />
      <main className="min-h-screen"></main>
    </div>
  );
};

export default Home;
