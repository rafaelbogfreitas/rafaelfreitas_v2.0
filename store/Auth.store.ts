import Router from 'next/router';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { axiosInstance } from '../api/axios';
import { decode } from 'jsonwebtoken';
import { AppDispatch, AppThunk } from '.';

import { alert } from './Alert.store';

interface InitialState {
  user: User | null;
  authToken: string | null;
  loggingIn: boolean;
  signingUp: boolean;
}

const initialState: InitialState = {
  user: null,
  authToken: null,
  loggingIn: false,
  signingUp: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<LoginPayload>) => {
      state.user = action.payload.user;
      state.authToken = action.payload.token;
    },
    setSigninup: (state) => {
      state.signingUp = true;
    },
    signupFailed: (state) => {
      state.signingUp = false;
    },
    signupSuceeded: (state) => {
      state.signingUp = false;
    },
    setLogout: (state) => {
      state.user = null;
      state.authToken = null;
    },
    setLoggingIn: (state) => {
      state.loggingIn = true;
    },
    loginFailed: (state) => {
      state.loggingIn = false;
    },
    loginSuceeded: (state) => {
      state.loggingIn = false;
    },
  },
});

const { setLogout } = authSlice.actions;
export const {
  loginFailed,
  loginSuceeded,
  setLogin,
  setLoggingIn,
  setSigninup,
  signupSuceeded,
  signupFailed,
} = authSlice.actions;
export default authSlice.reducer;

interface User {
  name: string;
  email: string;
}

interface DecodedToken {
  sub: User;
}

interface LoginResponse {
  message: string;
  token: string;
}

interface LoginPayload {
  user: User;
  token: string;
}

export const login = (email: string, password: string): AppThunk => {
  return async (dispatch: AppDispatch): Promise<void> => {
    dispatch(setLoggingIn());
    try {
      const { data } = await axiosInstance.post<LoginResponse>(`admin/login`, {
        email,
        password,
      });
      const decodedToken = decode(data.token) as DecodedToken;
      dispatch(setLogin({ user: decodedToken.sub, token: data.token }));
      await Router.push('/admin');
      dispatch(loginSuceeded());
      dispatch(alert(data.message));
    } catch (err) {
      dispatch(loginFailed());
      if (err.response && err.response.status === 401) {
        dispatch(alert(err.response.data.message, 'error'));
      } else {
        dispatch(alert('Something went wrong', 'error'));
      }
    }
  };
};

export const signup = (name: string, email: string, password: string) => async (
  dispatch: AppDispatch
): Promise<void> => {
  dispatch(setSigninup());
  try {
    const { data } = await axiosInstance.post<{ message: string }>(
      `admin/signup`,
      {
        name,
        email,
        password,
      }
    );
    console.log({ signupResponse: data });
    await Router.push('/admin/login');
    dispatch(signupSuceeded());
  } catch (err) {
    console.error(err);
    dispatch(signupFailed());
  }
};

export const logout = () => (dispatch: AppDispatch): void => {
  dispatch(setLogout());
  dispatch(alert('Logout efetuado com sucesso', 'success'));
};
