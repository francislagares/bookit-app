/* eslint-disable no-param-reassign */
import { NextApiHandler, NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';
import ErrorHandler from 'utils/errorHandler';

interface IError {
  message: string;
  statusCode: number;
  stack: string;
  path: string;
  name: string;
}

export default (
  err: IError,
  req: NextApiHandler,
  res: NextApiResponse,
  next: NextHandler,
) => {
  err.statusCode = err.statusCode || 500;

  let error = { ...err };

  error.message = err.message;

  // Wrong Mongoose Object ID Error
  if (err.name === 'CastError') {
    const message = `Resource not found. Invalid: ${err.path}`;
    error = new ErrorHandler(message, 400);
  }

  // Handling Mongoose Validation Error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(value => value.message);
    error = new ErrorHandler(message, 400);
  }

  res.status(error.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack,
  });
};
