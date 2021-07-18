import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssReset />
      <Component {...pageProps} />
    </>
  )
}

const CssReset = createGlobalStyle`
html,
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`
