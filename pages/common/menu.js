import Link from 'next/link'
import { useRouter } from "next/router"

export default function Menu() {
    const router = useRouter()

    const onClickLogout = () => {
        router.push('/common/login')        
    }

    return (
        <>
            <Link href="/page-one">
                <a>Pergi ke page one</a>
            </Link>
            <Link href="/posts/abc">
                <a>Pergi ke posts/abc</a>
            </Link>
            <Link href="/posts/100">
                <a>Pergi ke posts/100</a>
            </Link>
            <Link href="/users/1000/IPA">
                <a>Pergi ke users/1000/IPA</a>
            </Link>
            <Link href="/users">
                <a>Pergi ke users</a>
            </Link>
            <Link href="/vercel.svg">
                <a>Pergi ke /vercel.svg</a>
            </Link>
            <Link href="/favicon.ico">
                <a>Pergi ke /favicon.ico</a>
            </Link>
            <button onClick={onClickLogout}>Logout</button>
        </>
    )
}