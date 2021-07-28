import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import { useRouter } from 'next/router'


export default function UserKelas() {
    const router = useRouter()
    const { id, kelas } = router.query

    return (
        <div className={styles.container}>
            <Head>
                <title>Kelas Anda</title>
                <meta name="description" content="Kelas" />
                <link rel="icon" href="/favicon.ico" />
            </Head>        
            <div>
                This is page  post { id } - { kelas }
            </div>
        </div>
    )
}