import { NextApiRequest, NextApiResponse } from 'next'
import connectToDb from '../../database/connectToDb'
import Project from '../../database/models'

export default async (_: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    await connectToDb()
    const projects = await Project.find({})
    res.statusCode = 200
    res.json(projects)
  } catch (err) {
    console.log(err)
    res.json({ err })
  }
}
