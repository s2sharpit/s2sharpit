import Head from 'next/head'
import { Poppins } from '@next/font/google'
import Header from '../components/Header'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Services from '../components/Services'
import Qualification from '../components/Qualification'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Tushar Saini | Dev-Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ts.ico" />
      </Head>
      <main className={`${poppins.variable} font-sans ` + "text-text-color bg-body-color"}>
        <Header />
        <Main />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  )
}