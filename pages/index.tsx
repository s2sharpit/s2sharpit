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
        <title>Tushar Saini - Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Welcome to Tushar Saini's portfolio, also known as s2sharpit." />
        <meta name="image" content="https://s2sharpit.me/_next/image?url=%2Fs2sharpit.webp&w=828&q=75" />
        <meta name="author" content="s2sharpit" />
        <meta name='keywords' content='s2sharpit,Tushar,Saini,TusharSaini,Tushars2sharpit,sainis2sharpit,portfolio,bharat' />
        <meta property="og:title" name="og:title" content="Tushar Saini - Portfolio" />
        <meta property="og:type" name="og:type" content="website" />
        <meta property="og:image" name="og:image" content="https://s2sharpit.me/_next/image?url=%2Fs2sharpit.webp&w=828&q=75" />
        <meta property="og:url" name="og:url" content="https://s2sharpit.me" />
        <meta property="og:description" name="og:description" content="Welcome to Tushar Saini's portfolio, also known as s2sharpit." />

        <link rel="icon" href="/ts.ico" />
        <link rel="canonical" href="https://s2sharpit.me" />
        <link rel="author" href="https://s2sharpit.me" />
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
