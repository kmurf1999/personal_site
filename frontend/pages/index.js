import Head from 'next/head'

import GlobalStyle from '../styles/global'
import PhoneHeader from '../components/PhoneHeader'
import Footer from '../components/Footer'
import About from '../components/About'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div className="wrapper">
      <GlobalStyle/>
      <Head>
        <title>Kyle Murphy</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <PhoneHeader/>
        <About/>
        <Projects/>
        <Footer/>
      </main>

    </div>
  )
}
