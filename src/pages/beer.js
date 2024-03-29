import React, { useRef } from 'react';
import { useRouter } from 'next/router';

const VideoBackground = () => {
  const videoRef = useRef(null);
  const router = useRouter();

  const startVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
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
    router.push('/');
  };

  return (
    <div
      className="video-background"
      
      onTouchStart={startVideo}
      onTouchEnd={stopVideo}
      onMouseDown={startVideo}
      onMouseUp={stopVideo}
      onMouseLeave={stopVideo}
      style={{
        // width: '300px',
      }}
    >
      <video ref={videoRef} muted playsInline onEnded={handleVideoEnd}>
        <source src="fill.mp4" type="video/mp4" />
        {/* Add additional source elements for other video formats if needed */}
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
