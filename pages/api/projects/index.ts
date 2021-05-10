import { NextApiRequest, NextApiResponse } from 'next';
import authenticated from '../../../api/authenticated';
import connectToDb from '../../../database/connectToDb';
import { Project } from '../../../database/models';

async function getAllProjects(
  _: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    await connectToDb();
    const projects = await Project.find({});
    res.status(200).json(projects);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
}

export default authenticated(getAllProjects);
