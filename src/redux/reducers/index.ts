import { combineReducers } from 'redux';
import { allRoomsReducer } from './roomReducers';

const reducers = combineReducers({
  allRooms: allRoomsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
