import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/upload-types.module.css";

const Homepage = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.layout1}>
        <img onClick={() => {router.push('/take-a-pic')}} className={styles.yes} src="/pic1.png" alt="" />
        <img className={styles.no} src="/pic2.png" alt="" />
      </div>
    </>
  );
};

export default Homepage;
