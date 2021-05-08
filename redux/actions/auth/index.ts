import { axiosInstance } from '../../../api/axios';
import { Dispatch } from 'redux';
import { decode } from 'jsonwebtoken';
import { AuthDispatchTypes, DecodedToken, LoginResponse } from './auth';
import { SET_LOGIN, SET_LOGOUT, SET_SIGNUP } from './constants';

export const login = (email: string, password: string) => async (
  dispatch: Dispatch<AuthDispatchTypes>
): Promise<void> => {
  try {
    const { data } = await axiosInstance.post<LoginResponse>(`admin/login`, {
      email,
      password,
    });

    const decodedToken = decode(data.token) as DecodedToken;

    dispatch({
      type: SET_LOGIN,
      payload: { user: decodedToken.sub, token: data.token },
    });
  } catch (err) {
    console.error(err);
  }
};

export const signup = (name: string, email: string, password: string) => async (
  dispatch: Dispatch<AuthDispatchTypes>
): Promise<void> => {
  try {
    const { data } = await axiosInstance.post<{ message: string }>(
      `admin/signup`,
      {
        name,
        email,
        password,
      }
    );

    dispatch({
      type: SET_SIGNUP,
      payload: data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => (dispatch: Dispatch<AuthDispatchTypes>): void => {
  dispatch({
    type: SET_LOGOUT,
  });
};
