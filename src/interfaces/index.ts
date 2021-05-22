export interface IRoom {
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
      user: IUser;
      name: string;
      rating: number;
      comment: string;
    },
  ];
  user: IUser;
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
  | IClearErrors;

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
