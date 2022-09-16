import 'src/styles/globals.scss';
import type { AppProps } from 'next/app';
import { AppContextProvider, UserContextProvider } from 'src/context/';
import { Canvas } from '../src/components';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <UserContextProvider>
        <Canvas />
        <Component {...pageProps} />
      </UserContextProvider>
    </AppContextProvider>
  );
}

export default MyApp;
