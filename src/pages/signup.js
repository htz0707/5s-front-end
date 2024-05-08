import React, { useState } from "react";
import { useRouter } from "next/router";
import { Input } from "antd";
import styles from "../styles/signup.module.css";
import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://rqbuxmhawnxdcdvwmnqo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxYnV4bWhhd254ZGNkdndtbnFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3OTI3MzEsImV4cCI6MjAzMDM2ODczMX0.uumL4bdXpRNIeVUg8FFCsuYlqCYhZ2hXiAp909DbrFQ')

const Homepage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = async () => {
    try {
      await supabase
        .from('user')
        .insert({ name: name, phone: phone, address: address, email: email });
      router.push('/upload-types')
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
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="SỐ ĐIỆN THOẠI" className={styles.customInput} />
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
