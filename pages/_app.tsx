import '@styles/main.css';
import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';

import '@styles/main.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable}`}>
      <Component {...pageProps} />{' '}
    </div>
  );
}
