import React from "react";
import styles from "../styles/CTA.module.css";

const CTA: React.FC = () => {
  return (
    <a href="#contact">
      <button className={styles["cta-button"]}>Let&apos;s Collaborate</button>
    </a>
  );
};

export default CTA;
