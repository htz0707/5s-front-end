// pages/_app.js
import { ImageProvider } from '../context/ImageContext';
import { SessionProvider } from 'next-auth/react';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (

    <SessionProvider session={pageProps.session}>
      <ImageProvider>
        <Component {...pageProps} />
      </ImageProvider>
    </SessionProvider>
  );
}

export default MyApp;
