import { combineReducers } from "redux";
import { user } from "./user/reducer";

export const reducers = combineReducers({
  user,
});

export type RootState = ReturnType<typeof reducers>;
