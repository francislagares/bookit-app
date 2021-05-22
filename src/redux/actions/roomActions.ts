import { Dispatch } from 'react';
import { IncomingMessage } from 'http';
import axios from 'axios';
import absoluteUrl from 'next-absolute-url';
import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAIL,
  CLEAR_ERRORS,
} from '../constants/roomConstants';
import { IAllRoomsFail, IAllRoomsSuccess, IClearErrors } from 'src/interfaces';

export const getRooms =
  (req: IncomingMessage) =>
  async (dispatch: Dispatch<IAllRoomsSuccess | IAllRoomsFail>) => {
    try {
      const { origin } = absoluteUrl(req);

      const { data } = await axios.get(`${origin}/api/rooms`);

      dispatch({
        type: ALL_ROOMS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_ROOMS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const clearErrors = () => async (dispatch: Dispatch<IClearErrors>) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};