/* eslint-disable global-require */
import { AppProps } from 'next/app';
import 'src/styles/global.css';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../../mocks');
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
