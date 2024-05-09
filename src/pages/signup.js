import React, { useState } from "react";
import { useRouter } from "next/router";
import { Input } from "antd";
import styles from "../styles/signup.module.css";
import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://xssbyasfkdgcihmkvraz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzc2J5YXNma2RnY2lobWt2cmF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNjE3NjQsImV4cCI6MjAzMDczNzc2NH0.wEshhI0cj16ps0SRkdpG7MlqKotk7A7zpm4kcIxFkTQ')

const Homepage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = async () => {
    try {
      let res = await supabase
        .from('user')
        .insert({ name: name, phone: phone, address: address, email: email });
      if (res?.status === 201) {
        router.push('/upload-types')
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className={styles.layout}>
        {
          <div className={styles.inputGroup}>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="HỌ VÀ TÊN" className={styles.customInput} />
            <Input type='number' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="SỐ ĐIỆN THOẠI" className={styles.customInput} />
            <Input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="ĐỊA CHỈ" className={styles.customInput} />
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="EMAIL" className={styles.customInput} />
          </div>
        }
        <img onClick={handleSignUp} className={styles.yes} src="/signup.png" alt="" />
      </div>
    </>
  );
};

export default Homepage;
