import 'src/styles/globals.scss'
import type { AppProps } from 'next/app'
import {AppContextProvider} from 'src/context/';
import {Canvas} from '../src/components';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Canvas/>
      <Component {...pageProps} />
    </AppContextProvider>
  
  )
}

export default MyApp
