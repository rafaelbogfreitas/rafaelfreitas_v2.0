import { Provider } from 'react-redux';
import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import store from '../redux/store';

import '../styles/index.scss';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
