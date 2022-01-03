import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'lib/context/theme'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default MyApp
