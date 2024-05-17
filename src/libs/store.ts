import { configureStore } from '@reduxjs/toolkit';

import catFactsReducer from '@/libs/features/catFacts/catFactsSlice';
import counterReducer from '@/libs/features/counter/counterSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      catFacts: catFactsReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infor the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
