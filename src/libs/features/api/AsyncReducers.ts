/* eslint-disable no-param-reassign */
import type {
  ActionReducerMapBuilder,
  AsyncThunk,
  CaseReducer,
  PayloadAction,
} from '@reduxjs/toolkit';
import type { AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk';

import type { AsyncState } from '../../types';

export class AsyncReducers {
  /**
   * @author Juun
   * @param builder
   * @example
   * ```ts
   * const asyncThunk = AsyncThunk.create(...);
   * const slice = createSlice({
   *   ...,
   *   reducers: {},
   *   extraReducers: (builder) => {
   *     // use default reducers:
   *     AsyncReducers.create(builder)(asyncThunk);
   *     // customize reducers:
   *     AsyncReducers.create(builder)(asyncThunk, {
   *       onFulfilled: (state, action) => {
   *         // Your reducer action here
   *       },
   *       onPending: (state, action) => {
   *         // Your reducer action here
   *       },
   *       ...,
   *     })
   *   }
   * })
   * ```
   */
  static create = <D = any, State = AsyncState<D[]>>(
    builder: ActionReducerMapBuilder<State>,
  ) => {
    return (
      asyncThunk: AsyncThunk<any, any, AsyncThunkConfig>,
      options: {
        onFulfilled?: CaseReducer<State, PayloadAction<any>>;
        onPending?: CaseReducer<State, PayloadAction<undefined>>;
        onRejected?: CaseReducer<State, PayloadAction<any>>;
      } = {},
    ) => {
      const { onFulfilled, onPending, onRejected } = {
        onFulfilled: (state: any, action: PayloadAction) => {
          state.data = action.payload;
          state.status = 'fulfilled';
        },
        onPending: (state: any) => {
          state.status = 'pending';
        },
        onRejected: (state: any) => {
          state.status = 'rejected';
        },
        ...options,
      };

      builder
        .addCase(asyncThunk.fulfilled, (state, action) =>
          onFulfilled(state, action),
        )
        .addCase(asyncThunk.pending, (state, action) =>
          onPending(state, action),
        )
        .addCase(asyncThunk.rejected, (state, action) =>
          onRejected(state, action),
        );
    };
  };
}
