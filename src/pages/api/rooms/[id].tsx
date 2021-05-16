import nextConnect from 'next-connect';
import { getSingleRoom } from 'controllers/roomControllers';
import dbConnect from 'database/dbConnect';

const roomsHandler = nextConnect();

dbConnect();

roomsHandler.get(getSingleRoom);

export default roomsHandler;
