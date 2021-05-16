import { NextApiRequest, NextApiResponse } from 'next';
import authenticated from '../../../api/authenticated';
import connectToDb from '../../../database/connectToDb';
import { Project } from '../../../database/models';

const deleteProject = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'DELETE') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { projectId } = req.query;

  try {
    await connectToDb();
    const response = await Project.deleteOne({ _id: projectId });
    res
      .status(200)
      .json({ message: 'Projeto deletado com sucesso', data: response });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao deletar projeto', err });
  }
};

export default authenticated(deleteProject);
