import React, { useState, useRef, useEffect } from "react";
import Layout from "@/components/layout";

export default function ChupAnhDoc() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [error, setError] = useState(null);
  const [stream, setStream] = useState(null);
  const [image, setImage] = useState("/frame_000.png");
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    return () => {
      clearTimeout(timer); // Cleanup timer when component unmounts or re-renders
    };
  }, [timer]);

  const handleTouchStart = () => {
    if (image === "/frame_219.png") {
      return;
    }
    const touchTimer = setTimeout(() => {
      setImage("/frame_219.png"); // Change to end image after 8 seconds
    }, 8000);

    setTimer(touchTimer);
    setImage("/IMG_7778.GIF"); // Change to animated image  when touch starts
  };

  const handleTouchEnd = () => {
    clearTimeout(timer); // Clear the timer if touch ends before 8 seconds
    if (image !== "/frame_219.png") {
      setImage("/frame_000.png"); // Reset to first image
      return;
    }
    captureImageFromVideo();
  };

  const startCamera = async (facingMode) => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: facingMode },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
      }
    } catch (err) {
      setError(err);
    }
  };

  const captureImageFromVideo = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      context.drawImage(
        videoRef.current,
        0,
        0,
        videoRef.current.videoWidth,
        videoRef.current.videoHeight,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      const capturedImage = canvasRef.current.toDataURL("image/png");
      setImage(capturedImage);
    }
  };

  useEffect(() => {
    // startCamera("environment");
    startCamera("user");
  }, []);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Layout>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        width="100%"
        height={754}
        style={{ objectFit: "cover" }}
      ></video>
      <img
        src={image}
        alt={image}
        width="100%"
        height="100%"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseUp={handleTouchEnd}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", top: 0, left: 0, zIndex: 2 }}
      ></canvas>
    </Layout>
  );
}
