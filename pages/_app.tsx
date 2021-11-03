// Todas las variables que estén incluidas en este archivo son accesibles desde cualquier sitio de la aplicación.

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  console.log("Esto es un texto accesible desde cualquier página de la aplicación")
  return <Component {...pageProps} />
}

export default MyApp
