import { NextApiRequest, NextApiResponse } from 'next';
import { sign } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import connectToDb from '../../../database/connectToDb';
import { User } from '../../../database/models';

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }
  const { email, password } = req.body;

  try {
    await connectToDb();
    const user = await User.findOne({ email });

    if (user) {
      const matched = bcrypt.compareSync(password, user.password);
      if (matched) {
        const claims = { sub: { name: user.name, email: user.email } };
        const jwt = sign(claims, process.env.JWT_SECRET_KEY || '', {
          expiresIn: '1h',
        });
        res.status(200).json({ message: 'Login successful', token: jwt });
        return;
      }
    }
    res.status(401).json({ message: 'Wrong email or password' });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong', err });
  }
}
