import { NextApiRequest, NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';
import Room from '../models/room';
import catchAsyncErrors from 'middlewares/catchAsyncErrors';
import ErrorHandler from 'utils/errorHandler';

const allRooms = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const rooms = await Room.find();

    res.status(200).json({
      success: true,
      rooms,
    });
  },
);

const newRoom = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const room = await Room.create(req.body);

    res.status(201).json({
      success: true,
      room,
    });
  },
);

const getSingleRoom = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    const room = await Room.findById(req.query.id);

    if (!room) {
      return next(new ErrorHandler('Room not found with this ID', 404));
    }

    res.status(200).json({
      success: true,
      room,
    });
  },
);

const updateRoom = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse) => {
    let room = await Room.findById(req.query.id);

    if (!room) {
      return res.status(404).json({
        success: false,
        message: 'Room not found with this ID',
      });
    }

    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      room,
    });
  },
);

const deleteRoom = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const room = await Room.findById(req.query.id);

    if (!room) {
      return res.status(404).json({
        success: false,
        message: 'Room not found with this ID',
      });
    }

    await room.delete();

    res.status(200).json({
      success: true,
      message: 'Room is deleted',
    });
  },
);

export { allRooms, newRoom, getSingleRoom, updateRoom, deleteRoom };
