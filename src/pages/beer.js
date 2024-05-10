import React, { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/beer.module.css'

const VideoBackground = () => {
  const videoRef = useRef(null);
  const router = useRouter();

  const topLeft = { x: 209, y: 396 }; // Define your four points here
  const topRight = { x: 359, y: 396 };
  const bottomRight = { x: 359, y: 653 };
  const bottomLeft = { x: 209, y: 653 };

  const isInsideRectangle = (point, topLeft, topRight, bottomRight, bottomLeft) => {
    const { x, y } = point;
    return (
      x >= topLeft.x &&
      x <= topRight.x &&
      y >= topLeft.y &&
      y <= bottomRight.y &&
      y >= topRight.y &&
      y <= bottomLeft.y
    );
  };

  const startVideo = (event) => {
    const { clientX, clientY } = event.touches ? event.touches[0] : event;
    const point = { x: clientX, y: clientY };
    if (isInsideRectangle(point, topLeft, topRight, bottomRight, bottomLeft)) {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }
  };

  const stopVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleVideoEnd = () => {
    // Redirect to another page when the video ends
    router.push('/webcam');
  };

  useEffect(() => {
    const disableRightClick = (event) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', disableRightClick);

    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);


  return (
    <div
      className={styles.videoBackground}
      onTouchStart={startVideo}
      onTouchEnd={stopVideo}
      onMouseDown={startVideo}
      onMouseUp={stopVideo}
      onMouseLeave={stopVideo}
    >
      <video className={styles.video1} ref={videoRef} muted playsInline onEnded={handleVideoEnd} controls={false} width="100%" height="100%">
        <source src="fill2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Additional content can be added over the video */}
    </div>
  );
};

export default VideoBackground;
