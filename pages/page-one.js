import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from './common/layout'

export default function PageOne(props) {
    const onClickLogout = () => {
        props.ls.removeItem('isLoggedIn')
        window.location.href = '/'
    }

    return (
        <Layout
            content={
                (
                    <div className={styles.container}>
                    <Head>
                        <title>Halaman Pertama</title>
                        <meta name="description" content="Tempat pertama anda memilih belajar" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>        
                    <div>
                        This is page one<br/>
                        <button onClick={onClickLogout}>Logout</button>
                    </div>
                </div>
                )
            }
        />
    )
}