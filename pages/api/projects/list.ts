import { NextApiRequest, NextApiResponse } from 'next';
// import authenticated from '../../../api/authenticated';
import connectToDb from '../../../database/connectToDb';
import { Project } from '../../../database/models';

const getProjectsList = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    await connectToDb();
    const projects = await Project.find({}, { title: 1 });
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err });
  }
};

// export default authenticated(getProjectsList);
export default getProjectsList;
