import { AuthDispatchTypes } from '../actions/auth/auth';
import { SET_LOGIN, SET_LOGOUT } from '../actions/auth/constants';

interface User {
  name: string;
  email: string;
}

interface AuthDefaultState {
  user: User | null;
  authToken: string | null;
}

const defaultState: AuthDefaultState = {
  user: null,
  authToken: null,
};

export const authReducer = (
  state = defaultState,
  action: AuthDispatchTypes
): AuthDefaultState => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        user: action.payload.user,
        authToken: action.payload.token,
      };
    case SET_LOGOUT:
      return {
        ...state,
        user: null,
        authToken: null,
      };
    default:
      return state;
  }
};

export default authReducer;
