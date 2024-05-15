import React, { useState, useEffect } from "react";
import styles from "../styles/quotes-choose.module.css";
import html2canvas from "html2canvas";
import { useRouter } from "next/router";
import { createClient } from "@supabase/supabase-js";
import CombineImages from "./components/combineImage";

const supabase = createClient(
  "https://xssbyasfkdgcihmkvraz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzc2J5YXNma2RnY2lobWt2cmF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNjE3NjQsImV4cCI6MjAzMDczNzc2NH0.wEshhI0cj16ps0SRkdpG7MlqKotk7A7zpm4kcIxFkTQ"
);

const Homepage = () => {
  const router = useRouter();
  const [data, setData] = useState(null);

  const captureAndSaveScreenshot = async (elementSelector) => {
    const element = document.querySelector(elementSelector);
  
    try {
      const canvas = await html2canvas(element);
      const imageData = canvas.toDataURL("image/png");
  
      // const { data, error } = await supabase
      //   .from("picture")
      //   .insert([{ url: imageData }]);
  
      // if (error) {
      //   console.error("Error uploading image:", error);
      // } else {
      //   localStorage.setItem("final_url", imageData);
      //   router.push("/share");
      // }
  
      // Send the imageData to a backend API or save it to a storage service
      // Example API call:
      // const response = await fetch('http://your-api-url/save-screenshot', {
      //   method: 'POST',
      //   body: JSON.stringify({ image: imageData }),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // });
  
      // Example response handling:
      // const data = await response.json();
      // console.log(data);
    } catch (error) {
      console.error("Error capturing or saving screenshot:", error);
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("image_url");
    if (storedData) {
      setData(storedData);
      captureAndSaveScreenshot("#ss");
    }
  }, []);
  return (
    <>
      <div className={styles.layout2}>
        {/* <img className={styles.inboxImage1} src="layout_4.png" />
        <img src={data} className={styles.inboxImage2} alt="" /> */}
        <CombineImages image1Src={'/layout_4.png'} image2Src={data} />

      </div>
    </>
  );
};

export default Homepage;
