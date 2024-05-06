import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '@/features/counterSlice';

export const store = () => {
  return configureStore({
    reducer: counterReducer,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>;
// Infor the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
