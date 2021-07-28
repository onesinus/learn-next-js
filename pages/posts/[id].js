import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'


export default function PostOne() {
    const router = useRouter()
    const { id, name } = router.query

    return (
        <div className={styles.container}>
            <Head>
                <title>Postingan</title>
                <meta name="description" content="Semua posting berkualitas ada disini" />
                <link rel="icon" href="/favicon.ico" />
            </Head>        
            <div>
                This is page  post { id } - { name }
            </div>
        </div>
    )
}