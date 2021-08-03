import { useState } from "react"
import PageOne from '../page-one'

export default function Login(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const onSubmitLogin = () => {
        if (username && password) {
            fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
              })
              .then(response => response.json())
              .then(data => {
                  if (data.isAuthenticated) {
                    props.ls.setItem('isLoggedIn', true)
                    // window.location.href = '/page-one'
                    return <PageOne />
                  } else {
                      alert("Invalid username or password")
                  }
              })
        } else {
            alert("Please input username and password")
        }
    }
    
    return (
        <>
            <input 
                type="text" 
                placeholder="Username" 
                onBlur={onUsernameChange}
            />
            <input 
                type="password" 
                placeholder="Password" 
                onBlur={onPasswordChange}
            />
            <input 
                type="submit" 
                value="Login" 
                onClick={onSubmitLogin}
            />
        </>
    )
}