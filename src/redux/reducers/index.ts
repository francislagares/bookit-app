import { combineReducers } from 'redux';
import { allRoomsReducer, roomDetailsReducer } from './roomReducers';
import { authReducer } from './userReducer';

const reducers = combineReducers({
  allRooms: allRoomsReducer,
  roomDetails: roomDetailsReducer,
  auth: authReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
