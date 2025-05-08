import React from "react";
import styles from "./NebulaBackground.module.css";

const NebulaBackground: React.FC = () => {
  return (
    <div className={styles.nebula}>
      <div className={styles.cloud1}></div>
      <div className={styles.cloud2}></div>
      <div className={styles.cloud3}></div>

      {/* Shooting Stara */}
      <span className={styles.shootingStar}></span>

      {/* 🌟 Twinkling Stars Overlay */}
      {[...Array(50)].map((_, i) => (
        <span key={i} className={styles.star}></span>
      ))}
    </div>
  );
};

export default NebulaBackground;
