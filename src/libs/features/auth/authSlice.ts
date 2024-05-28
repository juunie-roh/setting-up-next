import { createSlice } from '@reduxjs/toolkit';

import type { UserState } from '@/types';

const initialState: UserState = {
  isLoggedIn: false,
  userName: 'Test User',
  userId: 'testId',
  userInfo: 'test information',
  authorization: 'test authorization',
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleLogin: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    setName: (state, action) => {
      state.userName = action.payload;
    },
    setId: (state, action) => {
      state.userId = action.payload;
    },
    setInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setAuth: (state, action) => {
      state.authorization = action.payload;
    },
  },
});

export const { toggleLogin, setName, setId, setInfo, setAuth } = slice.actions;
export const authReducer = slice.reducer;
