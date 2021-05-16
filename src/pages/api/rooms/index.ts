import nextConnect from 'next-connect';
import { allRooms, newRoom } from 'controllers/roomControllers';
import dbConnect from 'database/dbConnect';
import onError from 'middlewares/errors';

const roomsHandler = nextConnect({ onError });

dbConnect();

roomsHandler.get(allRooms);

roomsHandler.post(newRoom);

export default roomsHandler;
