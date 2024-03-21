export type TOGGLE_LOGIN = 'TOGGLE_LOGIN';
export type SET_NAME = 'SET_NAME';
export type SET_ID = 'SET_ID';
export type SET_INFO = 'SET_INFO';
export type SET_AUTH = 'SET_AUTH';

export type UserState = {
  isLoggedIn: boolean;
  userName: string;
  userId: string;
  userInfo: string;
  authorization: string;
};

export type UserAction =
  | { type: TOGGLE_LOGIN; isLoggedIn: boolean }
  | { type: SET_NAME; userName: string }
  | { type: SET_ID; userId: string }
  | { type: SET_INFO; userInfo: string }
  | { type: SET_AUTH; authorization: string };
