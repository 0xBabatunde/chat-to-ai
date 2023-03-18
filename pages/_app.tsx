import React from 'react';
import '@vercel/examples-ui/globals.css'
import { useEffect } from 'react';
import { AppProps } from 'next/app';



function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, []);
  return (
            <Component {...pageProps} />
  )
}

export default MyApp