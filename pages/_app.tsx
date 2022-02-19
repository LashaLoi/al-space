import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

import { ThemeProvider } from 'lib/context/theme'
import { GlobalStateProvider } from 'lib/context/global'

import Navigation from '@components/Navigation'

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <GlobalStateProvider>
    <ThemeProvider>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Navigation />
    </ThemeProvider>
  </GlobalStateProvider>
)

export default MyApp
