export interface IRoom {
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
  images: [{ public_id: string; uri: string }];
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

export type IAction = IAllRoomsSuccess | IAllRoomsFail | IClearErrors;

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

export interface IClearErrors {
  type: 'CLEAR_ERRORS';
}
