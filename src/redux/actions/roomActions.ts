import axios from 'axios';
import { NextApiRequest } from 'next';
import absoluteUrl from 'next-absolute-url';
import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAIL,
  CLEAR_ERRORS,
} from '../constants/roomConstants';

export const getRooms = (req: NextApiRequest) => async dispatch => {
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

export const clearErrors = () => async dispatch => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
