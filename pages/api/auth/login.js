import users from '../users/dummy'

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body
    
        const user = users.filter((user) => 
            user.username === username
            &&
            user.password === password
        )
     
        const isAuthenticated = user.length === 1
        res.status(200).json({ isAuthenticated })
    }else {
        res.send('Method not allowed')
    }
}
