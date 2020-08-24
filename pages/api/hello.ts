// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDb from "../../database/connectToDb"
import { userInfo } from "os"

export default async (req, res) => {
  await connectToDb()
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
