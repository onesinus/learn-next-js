import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function PageOne(props) {
    const onClickLogout = () => {
        props.ls.removeItem('isLoggedIn')
        window.location.href = '/'
    }

    return (
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