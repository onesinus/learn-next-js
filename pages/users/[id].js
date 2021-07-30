import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function UserDetail() {
    const router = useRouter()
    const { id, name } = router.query
    return (
        <div className={styles.container}>
            <Head>
                <title>User yang terdaftar pada aplikasi kami</title>
                <meta name="description" content="User detail" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
        </div>
    )
}
