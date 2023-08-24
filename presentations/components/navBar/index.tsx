import React from "react";
import styles from "./NavBar.module.scss";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <h1 className={styles.title} onClick={() => router.push("/")}>
        FLYJET
      </h1>
    </div>
  );
};

export default NavBar;
