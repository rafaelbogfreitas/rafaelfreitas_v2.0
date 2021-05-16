import { NextApiRequest, NextApiResponse } from 'next';
import authenticated from '../../../api/authenticated';
import connectToDb from '../../../database/connectToDb';
import { Project } from '../../../database/models';

const update = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { _id } = req.body;

  if (req.method !== 'PATCH') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    await connectToDb();
    const response = await Project.updateOne({ _id }, { $set: req.body });
    res
      .status(200)
      .json({ message: 'Projeto atualizado com sucesso', data: response });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao atualizar projeto', err });
  }
};

export default authenticated(update);
