const users = require('./dummy')

export default function handler(req, res) {
    res.status(200).json({ data: users })
  }
  