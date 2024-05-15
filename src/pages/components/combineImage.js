// components/CombineImages.js

import { useEffect, useRef, useState } from 'react';

const CombineImages = ({ image1Src, image2Src }) => {
  const canvasRef = useRef(null);
  const [combinedImage, setCombinedImage] = useState(null);

  useEffect(() => {
    const image1 = new Image();
    const image2 = new Image();
    
    image1.src = image1Src;
    image2.src = image2Src;

    image1.onload = () => {
      image2.onload = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Set canvas size to viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        canvas.width = viewportWidth;
        canvas.height = viewportHeight;

        // Calculate the scaling factors to fit both images within the viewport
        const scaleFactor1 = Math.min(viewportWidth / image1.width, viewportHeight / image1.height);
        const scaleFactor2 = Math.min(viewportWidth / image2.width, viewportHeight / image2.height);

        // Calculate the new dimensions
        const newWidth1 = image1.width * scaleFactor1;
        const newHeight1 = image1.height * scaleFactor1;
        const newWidth2 = image2.width * scaleFactor2;
        const newHeight2 = image2.height * scaleFactor2;

        // Draw the first image centered
        const xOffset1 = (viewportWidth - newWidth1) / 2;
        const yOffset1 = (viewportHeight - newHeight1) / 2;
        context.drawImage(image1, xOffset1, yOffset1, newWidth1, newHeight1);

        // Draw the second image centered
        const xOffset2 = (viewportWidth - newWidth2) / 2;
        const yOffset2 = (viewportHeight - newHeight2) / 2;
        context.drawImage(image2, xOffset2, yOffset2, newWidth2, newHeight2);

        // Convert the canvas to a data URL and set it as the combined image
        setCombinedImage(canvas.toDataURL());
      };
    };
  }, [image1Src, image2Src]);

  return (
    <div>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      {combinedImage && <img src={combinedImage} alt="Combined Image" style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} />}
    </div>
  );
};

export default CombineImages;
