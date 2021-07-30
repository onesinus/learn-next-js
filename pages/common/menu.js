import Link from 'next/link'

export default function Menu() {
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
            <Link href="/vercel.svg">
                <a>Pergi ke /vercel.svg</a>
            </Link>
            <Link href="/favicon.ico">
                <a>Pergi ke /favicon.ico</a>
            </Link>
        </>
    )
}