import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/index.module.css";

const Homepage = () => {
  const [step, setStep] = useState(0);

  return (
    <>
      {step === 0 && (
        <div className={styles.layout}>
          <img
            onClick={() => {
              setStep(1);
            }}
            className={styles.yes}
            src="/18yes.png"
            alt=""
          />
          <img
            onClick={() => {
              setStep(2);
            }}
            className={styles.no}
            src="/18no.png"
            alt=""
          />
          <img className={styles.confirm} src="/18confirm.png" alt="" />
        </div>
      )}
      {step === 1 && (
        <div className={styles.layout1}>
          <img className={styles.yes} src="/tham_gia.png" alt="" />
        </div>
      )}
      {step === 2 && (
        <div className={styles.layout2}>
          {/* <img className={styles.yes} src="/18yes.png" alt="" />
          <img className={styles.no} src="/18no.png" alt="" />
          <img className={styles.confirm} src="/18confirm.png" alt="" /> */}
        </div>
      )}
    </>
  );
};

export default Homepage;
