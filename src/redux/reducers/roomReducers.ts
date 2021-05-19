import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAIL,
  CLEAR_ERRORS,
} from '../constants/roomConstants';

const initialState = {
  rooms: [],
};

export const allRoomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_ROOMS_SUCCESS:
      return {
        roomsCount: action.payload.roomsCount,
        resPerPage: action.payload.resPerPage,
        filteredRoomsCount: action.payload.filteredRoomsCount,
        rooms: action.payload.rooms,
      };
    case ALL_ROOMS_FAIL:
      return {
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
