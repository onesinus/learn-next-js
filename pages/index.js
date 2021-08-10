import Head from 'next/head'

import styles from '../styles/Home.module.css'

import Menu from './common/menu'
import Footer from './common/footer'
// import Coba from '../komponen/Coba'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Belajar Onlen</title>
        <meta name="description" content="Tempat anda belajar online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello World!
        </h1>
        {/* <Coba /> */}
        <Menu />
      </main>
      <Footer />
    </div>
  )
}