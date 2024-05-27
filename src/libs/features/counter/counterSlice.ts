import { createSlice } from '@reduxjs/toolkit';

import type { AsyncState } from '@/libs/types';

const initialState: AsyncState<any> = {
  data: 0,
  status: 'fulfilled',
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.data += 1;
    },
    decrement: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.data -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
