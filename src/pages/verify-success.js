import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/index.module.css";

const Homepage = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.layout1}>
        <img onClick={() => {router.push('/signup')}} className={styles.yes} src="/tham_gia.png" alt="" />
      </div>
    </>
  );
};

export default Homepage;
