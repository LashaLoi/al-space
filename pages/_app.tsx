import React from 'react'
import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'lib/context/theme'
import { GlobalStateProvider } from 'lib/context/global'
import { UserProvider } from 'lib/context/user'
import Navigation from '@components/Navigation'
import '../firebase/clientApp'

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <GlobalStateProvider>
    <ThemeProvider>
      <UserProvider>
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
      </UserProvider>
    </ThemeProvider>
  </GlobalStateProvider>
)

export default MyApp
