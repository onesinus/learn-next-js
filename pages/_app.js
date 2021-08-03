import { useState, useEffect } from 'react'
import '../styles/globals.css'
import Login from './common/login'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const [ls, setLs] = useState(undefined)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  const [disabledDirectAccess, _] = useState([
    '/common/menu',
    '/common/footer',
  ])

  useEffect(() => {
      setLs(localStorage)
      setIsAuthenticated(localStorage.getItem('isLoggedIn'))
  }, [])

  useEffect(() => {
    if (disabledDirectAccess.includes(router.route)) {
      window.location.href = '/'
    }
  }, [disabledDirectAccess, router.route])

  if (isAuthenticated) {
    return <Component ls={ls} {...pageProps} />
  }else {
    return <Login ls={ls} />
  }
}

export default MyApp
