import 'styles/globals.css'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'lib/context/theme'
import { GlobalStateProvider } from 'lib/context/global'

import Navigation from '@components/Navigation'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <GlobalStateProvider>
    <ThemeProvider>
      <Component {...pageProps} />
      <Navigation />
    </ThemeProvider>
  </GlobalStateProvider>
)

export default MyApp
