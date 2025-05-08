import { ReactNode } from "react";
import styles from "./Layout.module.css";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          📚 Bookiverse
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/pricing">Pricing</Link>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Bookiverse. Explore the universe of books.
      </footer>
    </div>
  );
}
