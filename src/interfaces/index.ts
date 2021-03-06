import { Document } from 'mongoose';

export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  avatar: {
    public_id: string;
    url: string;
  };
  role: string;
  createdAt: Date;
  resetPasswordToken: string;
  resetPasswordExpire: Date;
}

export interface IRoom extends Document {
  _id: string;
  name: string;
  pricePerNight: number;
  description: string;
  address: string;
  guestCapacity: number;
  numOfBeds: number;
  internet: boolean;
  breakfast: boolean;
  airConditioned: boolean;
  petsAllowed: boolean;
  roomCleaning: boolean;
  ratings: number;
  numOfReviews: number;
  images: [{ public_id: string; url: string }];
  category: 'King' | 'Single' | 'Twins';
  reviews: [
    {
      user: IUser['_id'];
      name: string;
      rating: number;
      comment: string;
    },
  ];
  user: IUser['_id'];
  createdAt: Date;
}

export interface IState {
  rooms: IRoom[];
}

export type IAction =
  | IAllRoomsSuccess
  | IAllRoomsFail
  | IRoomDetailsSuccess
  | IRoomDetailsFail
  | IRegisterUserRequest
  | IRegisterUserSuccess
  | IRegisterUserFail
  | IClearErrors;

export interface IRegisterUserRequest {
  type: 'REGISTER_USER_REQUEST';
}

export interface IRegisterUserSuccess {
  type: 'REGISTER_USER_SUCCESS';
}

export interface IRegisterUserFail {
  type: 'REGISTER_USER_FAIL';
  payload: string | null;
}

export interface IAllRoomsSuccess {
  type: 'ALL_ROOMS_SUCCESS';
  payload: {
    roomsCount: number;
    resPerPage: number;
    filteredRoomsCount: number;
    rooms: IRoom[];
  };
}

export interface IAllRoomsFail {
  type: 'ALL_ROOMS_FAIL';
  payload: string | null;
}

export interface IRoomDetailsSuccess {
  type: 'ROOM_DETAILS_SUCCESS';
  payload: {
    room: IRoom;
  };
}

export interface IRoomDetailsFail {
  type: 'ROOM_DETAILS_FAIL';
  payload: string | null;
}

export interface IClearErrors {
  type: 'CLEAR_ERRORS';
}
