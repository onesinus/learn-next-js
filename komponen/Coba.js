import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Coba() {
    // const [users, setUsers] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:3000/api/auth/login', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({username: 'bambang', password: '123'}),
    //       })
    //       .then(response => response.json())
    //       .then(data => setUsers(data))
    // }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>Halaman Pertama</title>
                <meta name="description" content="Tempat pertama anda memilih belajar" />
                <link rel="icon" href="/favicon.ico" />
            </Head>        
            <div>
                <p>Ini komponent diluar pages folder</p>
                {/* { users.map(user => ( <div key={user.id}>{user.username}</div> )) } */}
            </div>
        </div>
    )
}