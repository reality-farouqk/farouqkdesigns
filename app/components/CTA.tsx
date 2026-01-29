import React from "react";
import styles from "../styles/CTA.module.css";
import Link from "next/link";

const CTA: React.FC = () => {
  return (
    <Link href="/#contact">
      <button className={styles["cta-button"]}>Get Your Website Built</button>
    </Link>
  );
};

export default CTA;
