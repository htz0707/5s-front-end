// pages/_app.js
import { Chakra_Petch } from 'next/font/google'
import { ImageProvider } from '../context/ImageContext';
import '../styles/globals.css';

const chakra = Chakra_Petch({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--primary-font',
  subsets: ['latin', 'vietnamese']
})

function MyApp({ Component, pageProps }) {
  return (
    <ImageProvider>
      <div className={chakra.variable}>
        <Component {...pageProps} />
      </div>
    </ImageProvider>
  );
}

export default MyApp;
