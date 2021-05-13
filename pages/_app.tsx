import { Provider } from 'react-redux';
import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store';

import '../styles/index.scss';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
