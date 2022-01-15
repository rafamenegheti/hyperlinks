import '../styles/globals.scss'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer/Footer'
import { ModalContextProvider } from '../contexts/ModalContext'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
    <ModalContextProvider>
      <Header />
      <Component {...pageProps} />
    </ModalContextProvider>
    </SessionProvider>
  )
}

export default MyApp
