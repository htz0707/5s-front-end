import { useRouter } from "next/router";
import Head from "next/head";
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
      <Head>
        <link rel="icon" href="/frame1.png" />
        <title>5S</title>
        <meta
          name="description"
          content="Rockitflow - Streamline your work with workflow automation"
        />
        <meta property="og:title" content="Rockitflow" />
        <meta
          property="og:description"
          content="Rockitflow - Streamline your work with workflow automation"
        />
        <meta property="og:image" content="/thumb.svg" />
        <meta
          property="og:url"
          content={'abcdef'}
        />
      </Head>

      <h1>Image Page</h1>
      <img
        style={{ width: "100vw", height: "auto" }}
        src={'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg'}
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
            url={"https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
      </div>
    </div>
  );
};

export default ImagePage;
