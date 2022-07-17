import HeadTag from "@/components/HeadTag";
import styles from "./styles.module.scss";

const Layout: React.FC<{
  children: React.ReactNode;
  title?: string;
}> = ({ children, title = null }) => {
  return (
    <>
      <HeadTag pageTitle={title} />
      <main className={styles.Container}>{children}</main>
    </>
  );
};

export default Layout;
