import { useRouter } from "next/router";
import { useImageContext } from "../context/ImageContext";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { Button } from "antd";

const ImagePage = () => {
  const { imageData } = useImageContext();
  const router = useRouter();

  // Fetch the image corresponding to the UUID and display it
  // This is just a placeholder
  return (
    <div>
      <h1>Image Page</h1>
      <img
        style={{ width: "370px", height: "auto" }}
        src={imageData}
        alt="Captured"
      />
      <br />
      {/* <Button onClick={() => router.push("/")}>Take picture again</Button> */}
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <Button type="primary" onClick={() => router.push("/")}>Capture Photo Again</Button>
          <FacebookShareButton
            // url={typeof window !== "undefined" ? window.location.href : ""}
            url={"https://rockitflow.com"}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
      </div>
    </div>
  );
};

export default ImagePage;
