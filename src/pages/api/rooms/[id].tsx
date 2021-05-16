import nextConnect from 'next-connect';
import {
  deleteRoom,
  getSingleRoom,
  updateRoom,
} from 'controllers/roomControllers';
import dbConnect from 'database/dbConnect';

const roomsHandler = nextConnect();

dbConnect();

roomsHandler.get(getSingleRoom);
roomsHandler.put(updateRoom);
roomsHandler.delete(deleteRoom);

export default roomsHandler;
