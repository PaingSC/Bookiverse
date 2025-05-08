import styles from "./Stars.module.css";
import { useEffect, useRef } from "react";

export default function Stars() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = styles.star;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${2 + Math.random() * 3}s`;
      star.style.opacity = `${0.3 + Math.random() * 0.7}`;
      container.appendChild(star);
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div className={styles.stars} ref={containerRef} />;
}
