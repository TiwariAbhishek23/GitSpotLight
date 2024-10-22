import Head from 'next/head'
import GotoTop from '../components/gototop/gototop.js';
import Hero from '../components/hero/hero.js';
export default function Home() {
  return (
    <>
      <Head class="dark">
        <title>GitSpotlight</title>
        <meta name="description" content="Poertfolio website developed by Abhishek Tiwari" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name ="keywords" content = "backend, Abhishek, Abhishek Tiwari, NSUT, NEXT, next.js"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Hero/>
     <GotoTop/>



      </main>
    </>
  )
}