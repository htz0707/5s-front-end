import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

import Layout from "@/components/layout";
import CustomButton from "@/components/custom-button";
import CenterDiv from "@/components/center-div";

export default function TrangChu() {
  const [agreed, setAgreed] = useState(false);
  const [message, setMessage] = useState(null);
  const router = useRouter();

  return (
    <Layout background="url('/new/screen-1.png')">
      <CenterDiv top="20.5%">
        <CustomButton
          background="/18yes.png"
          width="188px"
          height="47px"
          onClick={() => {
            if (agreed) {
              router.push("/new/tham-gia");
            } else {
              !message && setMessage(true);
            }
          }}
        />
      </CenterDiv>

      <CenterDiv top="31.5%">
        <CustomButton
          background="/18no.png"
          width="188px"
          height="47px"
          onClick={() => router.push("/new/cam-on")}
        />
      </CenterDiv>

      <CenterDiv top="46.5%">
        <div
          style={{
            height: "201px",
            width: "300px",
            backgroundImage: agreed
              ? "url('/new/dong-y.png')"
              : "url('/new/khong-dong-y.png')",
            backgroundSize: "cover",
            cursor: "pointer",
          }}
          onClick={() => {
            if (agreed) {
              setAgreed(false);
            } else {
              message && setMessage(false);
              setAgreed(true);
            }
          }}
        >
          <p
            style={{
              color: "red",
              fontWeight: 500,
              userSelect: "none",
              padding: "26px 14px 0px 46px",
              textAlign: "justify",
              fontSize: "14px",
            }}
          >
            Tôi đồng ý cho Bia Hơi Hà Nội xử lý các thông tin cá nhân của tôi
            cho mục đích tiếp thị, phân tích nội bộ, chăm sóc khách hàng và các
            mục đích khác: cụ thể xem chi tiết ở Điều khoản & điều kiện chung và{" "}
            <u style={{ textUnderlineOffset: "2px" }}>
              Thông báo điều khoản bảo vệ dữ liệu cá nhân của Chúng tôi
            </u>
            .
          </p>
        </div>
        <p
          style={{
            color: "#ee301e",
            fontWeight: "500",
            fontSize: "14px",
            marginTop: "8px",
            opacity: message ? 1 : 0,
            transition: "opacity 200ms ease-in-out",
          }}
        >
          Đồng ý điều khoản để tiếp tục
        </p>
      </CenterDiv>
    </Layout>
  );
}
