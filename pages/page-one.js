import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function PageOne() {
    // localStorage.setItem("access-page", "Page 1 loo")
    return (
        <div className={styles.container}>
            <Head>
                <title>Halaman Pertama</title>
                <meta name="description" content="Tempat pertama anda memilih belajar" />
                <link rel="icon" href="/favicon.ico" />
            </Head>        
            <div>
                This is page one
            </div>
        </div>
    )
}