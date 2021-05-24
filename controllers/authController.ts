import { NextApiRequest, NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';
import User from '../models/user';
import catchAsyncErrors from 'middlewares/catchAsyncErrors';
import APIFeatures from 'utils/apiFeatures';
import ErrorHandler from 'utils/errorHandler';

const registerUser = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: 'PUBLIC_ID',
        url: 'URL',
      },
    });

    res.status(201).json({
      success: true,
      message: 'Account Registered Successfully',
    });
  },
);

export { registerUser };
