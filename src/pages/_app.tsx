import type { AppProps } from 'next/app'
import {  ParallaxProvider } from 'react-scroll-parallax'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import ActiveLinkProvider from 'context/AppContext'

import theme from 'theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ActiveLinkProvider>
      <ParallaxProvider>
        <ThemeProvider theme={ theme }>
          <CssBaseline />
          <Component { ...pageProps } />
        </ThemeProvider>
      </ParallaxProvider>
    </ActiveLinkProvider>
  )
}

export default MyApp
