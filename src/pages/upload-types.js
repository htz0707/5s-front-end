import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/upload-types.module.css";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xssbyasfkdgcihmkvraz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzc2J5YXNma2RnY2lobWt2cmF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNjE3NjQsImV4cCI6MjAzMDczNzc2NH0.wEshhI0cj16ps0SRkdpG7MlqKotk7A7zpm4kcIxFkTQ"
);

const Homepage = () => {
  const router = useRouter();
  const [latestImage, setLatestImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // const handleFileChange = async (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = async () => {
  //       const base64String = reader.result;
  //       const { data, error } = await supabase
  //         .from('picture')
  //         .insert([{ url: base64String }]);

  //       if (error) {
  //         console.error("Error uploading image:", error);
  //       } else {
  //         localStorage.setItem('image_url', base64String);
  //         router.push('/share');
  //         setLatestImage(base64String); // Set the latest image to the newly uploaded image
  //       }
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem("image_url", reader.result);
        router.push("/quote-choose");
      };
      reader.readAsDataURL(file);
      // const { data, error } = await supabase.storage
      //   .from("pic") // Replace 'your_bucket_name' with your actual bucket name
      //   .upload(`public/${file.name}`, file, {
      //     cacheControl: "3600",
      //     upsert: false,
      //   });

      // if (error) {
      //   console.error("Error uploading image:", error.message);
      // } else {
      //   const imageUrl = `https://xssbyasfkdgcihmkvraz.supabase.co/storage/v1/object/public/pic/public/${file.name}`;
      //   localStorage.setItem("image_url", imageUrl);
      //   router.push("/quote-choose");
      //   setLatestImage(imageUrl); // Set the latest image to the newly uploaded image
      // }
    }
  };

  return (
    <>
      <div className={styles.layout1}>
        <img
          onClick={() => router.push("/take-a-pic")}
          className={styles.yes}
          src="/pic1.png"
          alt="Take a Pic"
        />

        <img
          onClick={handleUploadClick}
          className={styles.no}
          src="/pic2.png"
          alt="Upload"
        />
        <input
          type="file"
          ref={fileInputRef}
          className={styles.hiddenFileInput}
          onChange={handleFileChange}
        />
        {/* {latestImage && (
          <img src={latestImage} className={styles.uploadedImage} alt="Uploaded" />
        )} */}
      </div>
    </>
  );
};

export default Homepage;
