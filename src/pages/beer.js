import React, { useRef } from 'react';
import { useRouter } from 'next/router';

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

  return (
    <div
      className="video-background"
      onTouchStart={startVideo}
      onTouchEnd={stopVideo}
      onMouseDown={startVideo}
      onMouseUp={stopVideo}
      onMouseLeave={stopVideo}
    >
      <video ref={videoRef} muted playsInline onEnded={handleVideoEnd}>
        <source src="fill2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Additional content can be added over the video */}
      <div className="content">
        {/* Your content here */}
      </div>
      <style jsx>{`
        .video-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }
        video {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
        }
        .content {
          /* Add styles for your content over the video */
        }
      `}</style>
    </div>
  );
};

export default VideoBackground;
