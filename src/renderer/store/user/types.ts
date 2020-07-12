import { AUTH } from "./actions";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";

export type UserState = {
  id: number;
  token: string;
  username: string;
  photo: string;
};

/* Auth types */
export type AuthPayload = UserState;

export type AuthAction = {
  type: typeof AUTH;
  payload: AuthPayload;
};

// ...

export type ThunkType = ThunkAction<Promise<void>, RootState, unknown, UserActions>;
export type UserActions = AuthAction;
