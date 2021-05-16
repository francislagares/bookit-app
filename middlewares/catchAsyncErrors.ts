import { NextApiRequest, NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';

type ICatch = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler,
) => Promise<void>;

export default (func: ICatch) =>
  (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    Promise.resolve(func(req, res, next)).catch(next);
  };
