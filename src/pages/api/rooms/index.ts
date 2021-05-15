import nextConnect from 'next-connect';
import { allRooms, newRoom } from 'controllers/roomControllers';
import dbConnect from 'database/dbConnect';

const roomsHandler = nextConnect();

dbConnect();

roomsHandler.get(allRooms);

roomsHandler.post(newRoom);

export default roomsHandler;
