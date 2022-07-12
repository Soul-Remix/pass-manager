import Footer from "../Footer/Footer";
import ResponsiveNavBar from "../ResponsiveNavBar/ResponsiveNavBar";

const Layout = ({ children }: any) => {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">
      <ResponsiveNavBar />
      <main className="bg-white dark:bg-navy">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
