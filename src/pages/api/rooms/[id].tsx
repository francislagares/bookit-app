import nextConnect from 'next-connect';
import {
  deleteRoom,
  getSingleRoom,
  updateRoom,
} from 'controllers/roomControllers';
import dbConnect from 'database/dbConnect';
import onError from 'middlewares/errors';

const roomsHandler = nextConnect({ onError });

dbConnect();

roomsHandler.get(getSingleRoom);
roomsHandler.put(updateRoom);
roomsHandler.delete(deleteRoom);

export default roomsHandler;
