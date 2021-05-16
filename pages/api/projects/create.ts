import { NextApiRequest, NextApiResponse } from 'next';
import authenticated from '../../../api/authenticated';
import connectToDb from '../../../database/connectToDb';
import { Project } from '../../../database/models';

const create = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'PUT') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    await connectToDb();
    const response = await Project.create(req.body);
    res
      .status(200)
      .json({ message: 'Projeto criado com sucesso', data: response });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar projeto', err });
  }
};

export default authenticated(create);
