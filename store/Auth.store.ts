import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { axiosInstance } from '../api/axios';
import { decode } from 'jsonwebtoken';
import { AppDispatch, AppThunk } from '.';

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

export const {
  setLogout,
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
      dispatch(loginSuceeded());
      dispatch(setLogin({ user: decodedToken.sub, token: data.token }));
    } catch (err) {
      console.error(err);
      loginFailed();
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
    dispatch(signupSuceeded());
  } catch (err) {
    console.error(err);
    dispatch(signupFailed());
  }
};
