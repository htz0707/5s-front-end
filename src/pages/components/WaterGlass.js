import { useState } from 'react';
import styles from './WaterGlass.module.css';

export default function WaterGlass() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageClick = () => {
    setImageLoaded(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="/bia.png"
          alt="Image 1"
          className={styles.image}
        />
        <img
          src="/lykhong.png"
          alt="Image 2"
          className={`${styles.image} ${imageLoaded ? styles.imageLoaded : ''}`}
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
}
