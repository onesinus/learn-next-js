import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Post() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Postingan</title>
                <meta name="description" content="Semua posting berkualitas ada disini" />
                <link rel="icon" href="/favicon.ico" />
            </Head>        
            <div>
                This is page  posts
            </div>
        </div>
    )
}