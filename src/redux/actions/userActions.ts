import { Dispatch } from 'react';
import axios from 'axios';
import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  CLEAR_ERRORS,
} from '../constants/userConstants';
import {
  IRegisterUserRequest,
  IRegisterUserSuccess,
  IRegisterUserFail,
  IClearErrors,
  IUser,
} from 'src/interfaces';

export const registerUser =
  (userData: IUser) =>
  async (
    dispatch: Dispatch<
      IRegisterUserRequest | IRegisterUserSuccess | IRegisterUserFail
    >,
  ) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post('/api/auth/register', userData, config);

      dispatch({
        type: REGISTER_USER_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const clearErrors = () => async (dispatch: Dispatch<IClearErrors>) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
