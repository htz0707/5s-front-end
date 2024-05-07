import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/index.module.css";

const Homepage = () => {
  const [value, setValue] = useState(false);
  const router = useRouter();

  return (
    <div className={styles.layout}>
      <img
        onClick={() => {
          if (value) {
            router.push('/verify-success');
          }
        }}
        className={styles.yes}
        src="/18yes.png"
        alt=""
      />
      <img
        onClick={() => {
          if (value) {
            router.push('/verify-fail');
          }
        }}
        className={styles.no}
        src="/18no.png"
        alt=""
      />
      {/* <img className={styles.confirm} src="/18confirm.png" alt="" /> */}
      {
        !value ? <div onClick={() => setValue(!value)} className={styles.confirmBoxFalse}>
          <p className={styles.text}>Tôi đồng ý cho Bia Hơi Hà Nội xử lý các thông tin cá nhân của tôi cho mục đích tiếp thị, phân tích nội bộ, chăm sóc khách hàng và các mục đích khác: cụ thể xem chi tiết ở <u>Điều khoản & điều kiện chung và Thông báo điều khoản bảo vệ dữ liệu cá nhân của Chúng tôi</u>.</p>
        </div> : <div onClick={() => setValue(!value)} className={styles.confirmBoxTrue}>
          <p className={styles.text}>Tôi đồng ý cho Bia Hơi Hà Nội xử lý các thông tin cá nhân của tôi cho mục đích tiếp thị, phân tích nội bộ, chăm sóc khách hàng và các mục đích khác: cụ thể xem chi tiết ở <u>Điều khoản & điều kiện chung và Thông báo điều khoản bảo vệ dữ liệu cá nhân của Chúng tôi</u>.</p>
        </div>
      }
    </div>
  );
};

export default Homepage;
