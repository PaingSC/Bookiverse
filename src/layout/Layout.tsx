import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          Bookiverse
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/pricing">Pricing</Link>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>© 2025 Bookiverse</footer>
    </div>
  );
};

export default Layout;
