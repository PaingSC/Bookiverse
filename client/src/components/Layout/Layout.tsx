import { ReactNode } from "react";
import styles from "./Layout.module.css";
import { Link } from "react-router-dom";
import Stars from "../Stars/Stars";
import GradientBackground from "../GradientBackground/GradientBackground";
import NebulaBackground from "../NebulaBackground/NebulaBackground";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* GradientBackground */}
      <GradientBackground />

      {/* NebulaBackground  */}
      <NebulaBackground />

      {/* Main container */}
      <div className={styles.container}>
        {/* Stars Animation */}
        <Stars />

        {/* Header */}
        <header className={styles.header}>
          <Link to="/" className={styles.logo}>
            📚 Bookiverse
          </Link>

          <nav>
            <Link to="/">Home</Link>
            <Link to="/pricing">Pricing</Link>
          </nav>
        </header>

        {/* Main Body */}
        <main className={styles.main}>{children}</main>

        {/* Footer */}
        <footer className={styles.footer}>
          © {new Date().getFullYear()} Bookiverse. Explore the universe of
          books.
        </footer>
      </div>
    </>
  );
}
