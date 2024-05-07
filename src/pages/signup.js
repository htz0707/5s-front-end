import React, { useState } from "react";
import { useRouter } from "next/router";
import { Input } from "antd";
import styles from "../styles/signup.module.css";

const Homepage = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.layout}>
        {
          <div className={styles.inputGroup}>
            <Input placeholder="HỌ VÀ TÊN" className={styles.customInput} />
            <Input placeholder="SỐ ĐIỆN THOẠI" className={styles.customInput} />
            <Input placeholder="ĐỊA CHỈ" className={styles.customInput} />
            <Input placeholder="EMAIL" className={styles.customInput} />
          </div>
        }
        <img onClick={() => {router.push('/upload-types')}} className={styles.yes} src="/signup.png" alt="" />
      </div>
    </>
  );
};

export default Homepage;
