import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useImageContext } from "../context/ImageContext";
import { Button } from "antd";

const WebcamPage = () => {
  const { setImage } = useImageContext();
  const router = useRouter();
  const videoRef = useRef();
  const canvasRef = useRef();
  const [photoData, setPhotoData] = useState(null);
  const fixedImageSrc = "/save.png"; // Replace with the actual path to your fixed image
  const [data, setData] = useState();

  // useEffect(() => {
  //   startWebcam(); // Start the webcam when the component mounts
  // }, []);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      // Initial dimension setup
      handleResize();
      startWebcam(window.innerWidth, window.innerHeight);

      // Event listener for window resize
      window.addEventListener('resize', handleResize);

      // Cleanup function to remove event listener
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []); 

  const startWebcam = (height, width) => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((error) => {
        console.error("Error accessing webcam: ", error);
      });

    // Load the fixed image
    const fixedImage = new Image();
    fixedImage.onload = function () {
      const context = canvasRef.current.getContext("2d");
      context.drawImage(fixedImage, 0, 0, height, width); // Draw the fixed image onto the canvas
    };
    fixedImage.src = fixedImageSrc;
  };

  const capturePhoto = () => {
    const context = canvasRef.current.getContext("2d");

    // Draw the webcam video onto the canvas
    context.drawImage(videoRef.current, 0, 0, windowSize.width, windowSize.height);

    // Draw the fixed image onto the canvas
    const fixedImage = new Image();
    fixedImage.onload = function () {
      context.drawImage(fixedImage, 0, 0, windowSize.width, windowSize.height); // Adjust position and size as needed

      // Get the image data from the canvas
      const imageData = canvasRef.current.toDataURL("image/png");

      // Save the image data to state
      setPhotoData(imageData);
      setData(imageData);
      const uuid = generateUUID();

      setImage(imageData, uuid);

      router.push(`/${uuid}`);
    };
    fixedImage.src = fixedImageSrc;
  };

  const generateUUID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        <video ref={videoRef} width={windowSize.width} height={windowSize.height} autoPlay></video>
        <br />
        <canvas
          ref={canvasRef}
          width={windowSize.width}
          height={windowSize.height}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
          }}
        ></canvas>
        <br />
        <Button type="primary" onClick={capturePhoto}>Capture Photo</Button>
        <br />

        {/* {photoData && (
        <div>
          <h2>Photo</h2>
          <img src={photoData} alt="Captured" style={{ width: '640px', height: 'auto' }} />
        </div>
      )} */}
      </div>
    </div>
  );
};

export default WebcamPage;
