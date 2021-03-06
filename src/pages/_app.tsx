import { AppProps } from 'next/app'
import Head from 'next/head'
import { QueryClientProvider } from 'react-query'
import { queryClient } from 'services/queryClient'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Pokedex</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta name="description" content="Pokemons from the Pokemon API" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default App
