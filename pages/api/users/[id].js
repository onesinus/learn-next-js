import users from './dummy'

export default function handler(req, res) {
    const { id } = req.query
    const user = users.filter((user) => user.id === parseInt(id))
 
    res.status(200).json({ data: user })
}
