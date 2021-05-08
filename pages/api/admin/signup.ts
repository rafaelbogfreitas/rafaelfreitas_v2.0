import { NextApiRequest, NextApiResponse } from 'next';

import bcrypt from 'bcrypt';

import connectToDb from '../../../database/connectToDb';
import { User } from '../../../database/models';

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }
  const { name, email, password } = req.body;

  try {
    await connectToDb();
    const existingUser = await User.findOne({ name, email });

    if (existingUser) {
      res.json({ message: 'User already exists' });
      return;
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    res.json(user);
  } catch (err) {
    res.json({ message: 'Something went wrong', err });
  }
}
