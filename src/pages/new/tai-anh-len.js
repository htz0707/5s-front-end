import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import CenterDiv from "@/components/center-div";
import CustomButton from "@/components/custom-button";

export default function TaiAnhLen() {
  const router = useRouter();

  return (
    <Layout background="url('/new/screen-4.jpg')">
      <CenterDiv top="72.5%">
        <CustomButton
          background="/new/chup-anh-ngay-btn.png"
          width="167px"
          height="32px"
          onClick={() => router.push("/new/chon-dinh-dang")}
        />
      </CenterDiv>
      <CenterDiv top="80%">
        <CustomButton
          background="/new/tai-tu-may-btn.png"
          width="167px"
          height="32px"
          // onClick={() => router.push("/chon-dinh-dang")}
        />
      </CenterDiv>
    </Layout>
  );
}
