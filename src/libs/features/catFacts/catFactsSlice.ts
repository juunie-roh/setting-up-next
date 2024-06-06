/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { AsyncReducers, AsyncThunk } from '@/libs/api';
import type { AsyncState } from '@/types';

const initialState: AsyncState<any> = {
  data: null,
  status: 'fulfilled',
};

export const getCatFacts = AsyncThunk.create('CatFacts')({
  url: 'https://cat-fact.herokuapp.com/facts',
  method: 'GET',
});

const slice = createSlice({
  name: 'catFacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => AsyncReducers.create(builder)(getCatFacts),
});

export const catFactsReducer = slice.reducer;
