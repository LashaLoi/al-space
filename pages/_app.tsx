import React from 'react'
import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'lib/context/theme'
import { GlobalStateProvider } from 'lib/context/global'
import Navigation from '@components/Navigation'

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <GlobalStateProvider>
    <ThemeProvider>
      <MDXProvider
        components={{
          a: (props) => <a {...props} className="text-slate-400" />,
          img: (props) => (
            <img {...props} className="rounded-md" alt={props.alt} />
          ),
        }}
      >
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MDXProvider>
      <Navigation />
    </ThemeProvider>
  </GlobalStateProvider>
)

export default MyApp
