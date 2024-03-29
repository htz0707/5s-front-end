// pages/_app.js
import { ImageProvider } from '../context/ImageContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ImageProvider>
      <Component {...pageProps} />
    </ImageProvider>
  );
}

export default MyApp;
