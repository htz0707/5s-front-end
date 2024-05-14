import React, { useState,useEffect} from "react";
import styles from "../styles/quotes-choose.module.css";

const Homepage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('image_url');
    if (storedData) {
      setData(storedData);
    }
  }, []);
  return (
    <>
      <div className={styles.layout2}>
        <img className={styles.inboxImage1} src='layout-pic-2.png' />
        <img
          src={data}
          className={styles.inboxImage2}
          alt=""
        />
      </div>
    </>
  );
};

export default Homepage;
