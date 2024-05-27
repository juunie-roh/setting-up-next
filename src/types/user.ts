export type ToggleLogin = 'TOGGLE_LOGIN';
export type SetName = 'SET_NAME';
export type SetId = 'SET_ID';
export type SetInfo = 'SET_INFO';
export type SetAuth = 'SET_AUTH';

export type UserState = {
  isLoggedIn: boolean;
  userName: string;
  userId: string;
  userInfo: string;
  authorization: string;
};

export type UserAction =
  | { type: ToggleLogin; isLoggedIn: boolean }
  | { type: SetName; userName: string }
  | { type: SetId; userId: string }
  | { type: SetInfo; userInfo: string }
  | { type: SetAuth; authorization: string };
