export default function handler(req, res) {
    res.status(200).json({ data: [
        {
            id: 1,
            name: 'Bambang'
        },
        {
            id: 2,
            name: 'Udin'
        }
    ] })
  }
  