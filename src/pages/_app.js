import Footer from '@/components/Footer/footer'
import Logo from '@/components/Logo/Logo'
import NavBar from '@/components/NavBar/NavBar'
import '@/styles/globals.css'
import {Montserrat} from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: ["--font-mont"]
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar/>
        <Component {...pageProps} />
        <Footer/>
      </main>
    </>
  )
}
