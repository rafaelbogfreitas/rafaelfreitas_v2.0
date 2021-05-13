import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increaseCounter: (state) => {
      state.value += 1;
    },
    decreaseCounter: (state) => {
      state.value -= 1;
    },
  },
});

export const { decreaseCounter, increaseCounter } = counterSlice.actions;
export default counterSlice.reducer;
