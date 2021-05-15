import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppThunk } from '.';

type AlertTypes = 'success' | 'error' | 'warning' | 'info';

interface AlertState {
  showAlert: boolean;
  message: string;
  type: AlertTypes;
  timeout: number;
}

const initialState: AlertState = {
  showAlert: false,
  message: '',
  type: 'success',
  timeout: 0,
};

export const alertSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    showAlert: (state, action: PayloadAction<AlertState>) => {
      state.showAlert = action.payload.showAlert;
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.timeout = action.payload.timeout;
    },
    clearAlert: (state) => {
      state.showAlert = false;
      state.message = '';
      state.type = 'success';
      state.timeout = 0;
    },
  },
});

const { showAlert } = alertSlice.actions;
export const { clearAlert } = alertSlice.actions;
export default alertSlice.reducer;

export const alert = (
  message: string,
  type: AlertTypes = 'success',
  timeout = 3000
): AppThunk => {
  return (dispatch: AppDispatch): void => {
    dispatch(showAlert({ message, type, showAlert: true, timeout }));
  };
};
