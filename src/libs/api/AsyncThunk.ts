import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { type AxiosRequestConfig } from 'axios';

export class AsyncThunk {
  /**
   * @author Juun
   * @param actionPrefix name of the data you want to handle (recommend: start with uppercase)
   * @param config configuration for an axios request
   * @example
   * ```ts
   * AsyncThunk.create('NameOfData')({
   *   url: 'requestURL',
   *   method: 'GET',
   *   ...,
   * })
   * ```
   * @returns `AsyncThunk = { typePrefix: 'fetchNameOfData/GET', ... }`
   */
  static create = (actionPrefix: string) => {
    return (config: AxiosRequestConfig) => {
      const asyncThunk = createAsyncThunk(
        `fetch${actionPrefix}/${config.method}`,
        async (_, { rejectWithValue }) => {
          try {
            const response = await axios(config);
            return response.data;
          } catch (error: any) {
            return rejectWithValue(error.response.data);
          }
        },
      );

      return asyncThunk;
    };
  };
}
