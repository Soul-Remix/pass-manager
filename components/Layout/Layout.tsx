import Footer from "../Footer/Footer";
import ResponsiveNavBar from "../ResponsiveNavBar/ResponsiveNavBar";

const Layout = ({ children }: any) => {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">
      <ResponsiveNavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
