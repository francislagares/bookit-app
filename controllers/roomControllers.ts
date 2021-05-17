import { NextApiRequest, NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';
import Room from '../models/room';
import catchAsyncErrors from 'middlewares/catchAsyncErrors';
import APIFeatures from 'utils/apiFeatures';
import ErrorHandler from 'utils/errorHandler';

const allRooms = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const resPerPage = 4;
    const roomsCount = await Room.countDocuments();

    const apiFeatures = new APIFeatures(Room.find(), req.query)
      .search()
      .filter();

    let rooms = await apiFeatures.query;
    const filteredRoomsCount = rooms.length;

    apiFeatures.pagination(resPerPage);
    rooms = await apiFeatures.query;

    res.status(200).json({
      success: true,
      roomsCount,
      resPerPage,
      filteredRoomsCount,
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
