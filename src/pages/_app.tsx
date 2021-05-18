/* eslint-disable global-require */
import { AppProps } from 'next/app';
import { wrapper } from '../redux/store';
import 'src/styles/global.css';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../../mocks');
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(MyApp);
