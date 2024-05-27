/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { AsyncReducers, AsyncThunk } from '@/libs/features/api';
import type { AsyncState } from '@/libs/types';

const initialState: AsyncState<any> = {
  data: null,
  status: 'fulfilled',
};

export const getCatFacts = AsyncThunk.create('CatFacts')({
  url: 'https://cat-fact.herokuapp.com/facts',
  method: 'GET',
});

const catFactsSlice = createSlice({
  name: 'catFacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => AsyncReducers.create(builder)(getCatFacts),
});

export const catFactsReducer = catFactsSlice.reducer;
