// context/ImageContext.js
import React, { createContext, useContext, useState } from 'react';

const ImageContext = createContext();

export const useImageContext = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
  const [imageData, setImageData] = useState(null);
  const [uuid, setUUID] = useState(null);

  const setImage = (data, uuid) => {
    setImageData(data);
    setUUID(uuid);
  };

  return (
    <ImageContext.Provider value={{ imageData, uuid, setImage }}>
      {children}
    </ImageContext.Provider>
  );
};
