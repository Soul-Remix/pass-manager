import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import ResponsiveNavBar from "../components/ResponsiveNavBar/ResponsiveNavBar";

const Home: NextPage = () => {
  return (
    <div className="dark">
      <Head>
        <title>Password Strength</title>
        <meta name="description" content="Test your password strength" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveNavBar />
      <main className="min-h-screen"></main>
      <Footer />
    </div>
  );
};

export default Home;
