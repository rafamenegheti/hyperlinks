import '../styles/globals.scss'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer/Footer'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>

  )
}

export default MyApp