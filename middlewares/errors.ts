/* eslint-disable no-param-reassign */
import { NextApiHandler, NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';

interface IError {
  message: string;
  statusCode: number;
  stack: string;
}

export default (
  err: IError,
  req: NextApiHandler,
  res: NextApiResponse,
  next: NextHandler,
) => {
  err.statusCode = err.statusCode || 500;

  const error = { ...err };

  error.message = err.message;

  res.status(error.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack,
  });
};
