import React from "react";
import { Form } from "antd";
import { useRouter } from "next/router";
import { createClient } from "@supabase/supabase-js";
import Layout from "@/components/layout";
import CustomButton from "@/components/custom-button";
import CenterDiv from "@/components/center-div";
import classes from "@/styles/layout.module.css";

const supabase = createClient(
  "https://xssbyasfkdgcihmkvraz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzc2J5YXNma2RnY2lobWt2cmF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNjE3NjQsImV4cCI6MjAzMDczNzc2NH0.wEshhI0cj16ps0SRkdpG7MlqKotk7A7zpm4kcIxFkTQ"
);

export default function DangKy() {
  const router = useRouter();

  const onFinish = async (values) => {
    const { error } = await supabase.from("user").insert(values);
    if (error) {
      console.log(error);
      return;
    }
    router.push("/new/tai-anh-len");
  };

  return (
    <Layout background="url('/new/screen-3.png')">
      <CenterDiv top="40%">
        <Form onFinish={onFinish} autoComplete="off">
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập tên" }]}
          >
            <input
              type="text"
              className={classes.input}
              aria-autocomplete="none"
              placeholder="Họ và tên"
            />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại" },
              {
                pattern: /(84|0[3|5|7|8|9])+([0-9]{8})/g,
                message: "Số điện thoại không hợp lệ",
              },
            ]}
          >
            <input
              type="number"
              className={classes.input}
              aria-autocomplete="none"
              placeholder="Số điện thoại"
            />
          </Form.Item>
          <Form.Item
            name="address"
            rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
          >
            <input
              type="text"
              className={classes.input}
              aria-autocomplete="none"
              placeholder="Tỉnh/Thành phố"
            />
          </Form.Item>
          <Form.Item name="email">
            <input
              type="text"
              className={classes.input}
              aria-autocomplete="none"
              placeholder="Email"
            />
          </Form.Item>
          <div
            style={{ marginTop: "56px", margin: "0 auto", textAlign: "center" }}
          >
            <CustomButton
              background="/new/dang-ky-btn.png"
              width="149px"
              height="43px"
              type="submit"
            />
          </div>
        </Form>
      </CenterDiv>
    </Layout>
  );
}
