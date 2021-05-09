import { SET_LOGGING_IN, SET_LOGIN, SET_LOGOUT, SET_SIGNUP } from './constants';

interface LoginResponse {
  message: string;
  token: string;
}

interface User {
  name: string;
  email: string;
}

interface DecodedToken {
  sub: User;
}

interface LoginPayload {
  user: User;
  token: string;
}

interface SignupPayload {
  message: string;
}

export interface SetLoginAction {
  type: typeof SET_LOGIN;
  payload: LoginPayload;
}

export interface SetLogoutAction {
  type: typeof SET_LOGOUT;
}

export interface SetLoggingInAction {
  type: typeof SET_LOGGING_IN;
  payload: boolean;
}
export interface SetSignupAction {
  type: typeof SET_SIGNUP;
  payload: SignupPayload;
}

type AuthDispatchTypes =
  | SetLoginAction
  | SetLogoutAction
  | SetLoggingInAction
  | SetSignupAction;
