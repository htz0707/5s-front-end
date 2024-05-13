import React from "react";
import { useRouter } from "next/router";
import { Button, Form, Input, Space } from "antd";
import styles from "../styles/signup.module.css";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://xssbyasfkdgcihmkvraz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzc2J5YXNma2RnY2lobWt2cmF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNjE3NjQsImV4cCI6MjAzMDczNzc2NH0.wEshhI0cj16ps0SRkdpG7MlqKotk7A7zpm4kcIxFkTQ');

const Homepage = () => {
  const router = useRouter();

  const onFinish = async (values) => {
    try {
      let res = await supabase
        .from('user')
        .insert(values);
      if (res?.status === 201) {
        router.push('/upload-types')
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.layout}>
      <Form
        name="signupForm"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
        >
          <Input placeholder="HỌ VÀ TÊN" className={styles.customInput} />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            { required: true, message: 'Vui lòng nhập số điện thoại!' },
            { pattern: /^[0-9]{10}$/, message: 'Vui lòng nhập số điện thoại hợp lệ!' },
          ]}
        >
          <Input type="number" placeholder="SỐ ĐIỆN THOẠI" className={styles.customInput} />
        </Form.Item>

        <Form.Item
          name="address"
          rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
        >
          <Input placeholder="ĐỊA CHỈ" className={styles.customInput} />
        </Form.Item>

        <Form.Item
          name="email"
        >
          <Input placeholder="EMAIL" className={styles.customInput} />
        </Form.Item>
        <div className={styles.flexbox}>
          <button className={styles.button} htmltype="submit">
            <img className={styles.yes} src="/signup.png" alt="" />
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Homepage;
