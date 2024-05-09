import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/take-a-pic.module.css";

const Homepage = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.layout1}>
        <img onClick={() => {router.push('/beer')}} className={styles.yes} src="/take1.png" alt="" />
        <img className={styles.no} src="/take2.png" alt="" />
      </div>
    </>
  );
};

export default Homepage;
