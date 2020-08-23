// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDb from "./connectToDb"

export default (req, res) => {
  connectToDb()

  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
