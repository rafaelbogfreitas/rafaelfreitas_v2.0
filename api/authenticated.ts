import { verify } from 'jsonwebtoken';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  return new Promise<void>((resolve) => {
    verify(
      req.headers.authorization || '',
      process.env.JWT_SECRET_KEY || '',
      async (err, decoded) => {
        if (!err && decoded) {
          return await fn(req, res);
          resolve();
        }

        res.status(401).json({ message: 'Please login to get a valid token' });
        resolve();
      }
    );
  });
};

export default authenticated;
