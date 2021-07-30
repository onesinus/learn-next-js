import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function Users({ users }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>User yang terdaftar pada aplikasi kami</title>
                <meta name="description" content="User" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.name}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>
                                <Link href={`/users/${user.id}?name=${user.name}`}>
                                    <a>Detail User</a>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:3000/api/users`)
    const data = await res.json()
    
    if (!data) {
      return {
        users: []
      }
    }
  
    return {
      props: {
        users: data.data
      }
    }
  }