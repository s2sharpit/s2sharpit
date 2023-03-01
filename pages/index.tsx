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
import Portfolio from '../components/Portfolio'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Tushar Saini - s2sharpit</title>
        <meta name="description" content="Welcome to Tushar Saini portfolio, also known as s2sharpit." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ts.ico" />
      </Head>
      <main className={`${poppins.variable} font-sans text-text-color bg-body-color`}>
        <Header />
        <div className='px-8 max-w-4xl mx-auto'>
        <Main />
          <About />
          <Skills />
          <Services />
          <Qualification />
          <Portfolio />
          <Testimonials />
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  )
}
