import HeadTag from "@/components/HeadTag";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const Layout: React.FC<{
  children: React.ReactNode;
  title?: string;
}> = ({ children, title = "Your Site" }) => {
  return (
    <>
      <HeadTag pageTitle={title} />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
