import '../dist/output.css'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
        <title>E-commerce landing page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
