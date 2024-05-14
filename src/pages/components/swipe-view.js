import { useState } from "react";

export default function SwipeView() {
  const images = [
    "/new/slide-1.png",
    "/new/slide-2.png",
    "/new/slide-3.png",
    "/new/slide-4.png",
    "/new/slide-5.png",
    "/new/slide-6.png",
    "/new/slide-7.png",
    "/new/slide-8.png",
    "/new/slide-9.png",
    "/new/slide-10.png",
  ];
  const [index, setIndex] = useState(0);
  const [startPosition, setStartPosition] = useState(null);

  const handleTouchStart = (e) => {
    setStartPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startPosition === null) return;
    const deltaX = e.touches[0].clientX - startPosition;
    if (Math.abs(deltaX) > 50) {
      setStartPosition(null);
      if (deltaX > 0) {
        if (index > 0) {
          setIndex(index - 1);
        }
      } else {
        if (index < images.length - 1) {
          setIndex(index + 1);
        }
      }
    }
  };

  const handleTouchEnd = () => {
    setStartPosition(null);
  };

  return (
    <div
      className="image-gallery"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((image, i) => (
        <div
          key={i}
          className={`image-slide ${index === i ? "active" : ""}`}
          style={{
            backgroundImage: `url(${image})})`,
          }}
        ></div>
      ))}
    </div>
  );
}
