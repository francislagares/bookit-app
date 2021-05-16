import { NextApiRequest, NextApiResponse } from 'next';
import Room from '../models/room';

const allRooms = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const rooms = await Room.find();

    res.status(200).json({
      success: true,
      rooms,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const newRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const room = await Room.create(req.body);

    res.status(201).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getSingleRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const room = await Room.findById(req.query.id);

    if (!room) {
      return res.status(404).json({
        success: false,
        message: 'Room not found with this ID',
      });
    }

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export { allRooms, newRoom, getSingleRoom };
