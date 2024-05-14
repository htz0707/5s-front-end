import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import CustomButton from "@/components/custom-button";
import CenterDiv from "@/components/center-div";

export default function ThamGia() {
  const router = useRouter();

  return (
    <Layout background="url('/new/screen-2.png')">
      <CenterDiv top="66%">
        <CustomButton
          background="/new/tham-gia-btn.png"
          width="154px"
          height="49px"
          onClick={() => router.push("/new/dang-ky")}
        />
      </CenterDiv>
    </Layout>
  );
}
