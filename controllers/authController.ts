import cloudinary from 'cloudinary';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';
import User from '../models/user';
import catchAsyncErrors from 'middlewares/catchAsyncErrors';
import APIFeatures from 'utils/apiFeatures';
import ErrorHandler from 'utils/errorHandler';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const registerUser = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: 'bookit-app/avatars',
      width: '150',
      crop: 'scale',
    });

    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Account Registered Successfully',
    });
  },
);

export { registerUser };
