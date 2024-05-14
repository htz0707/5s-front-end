import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/share.module.css";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { message } from "antd";

const Homepage = () => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('#BiaHoiHaNoi #MotNetVanHoaHaNoi #ViBiaGanKetMoiKhoanhKhac');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      message.success('Copied success') // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };



  return (
    <>
      <div className={styles.layout1}>
        <div className={styles.layout2}>
          <img src={localStorage.getItem('image_url')} className={styles.inboxImage} alt="" />
        </div>
        <FacebookShareButton
          // url={typeof window !== "undefined" ? window.location.href : ""}
          url={"https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"}
        >
          <img src="/share.png" className={styles.btn1} alt="" />
        </FacebookShareButton>
        <img onClick={handleCopy} src="/share2.png" className={styles.btn} alt="" />
      </div>
    </>
  );
};

export default Homepage;
