import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import CustomButton from "../components/custom-button";
import CenterDiv from "../components/center-div";

export default function ChonDinhDang() {
  const router = useRouter();

  return (
    <Layout background="url('/new/screen-5.jpg')">
      <CenterDiv top="27%">
        <CustomButton
          background="/new/anh-doc-btn.png"
          width="280px"
          height="233px"
          onClick={() => router.push("/new/chup-anh-doc")}
        />
      </CenterDiv>

      <CenterDiv top="56%">
        <CustomButton
          background="/new/anh-ngang-btn.png"
          width="289px"
          height="209px"
          // onClick={() => router.push("/beer")}
        />
      </CenterDiv>
    </Layout>
  );
}
