import nextConnect from 'next-connect';
import { registerUser } from 'controllers/authController';
import dbConnect from 'database/dbConnect';
import onError from 'middlewares/errors';

const authHandler = nextConnect({ onError });

dbConnect();

authHandler.post(registerUser);

export default authHandler;
