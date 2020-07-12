import { UserActions, UserState } from "./types";
import { SET_AUTH } from "./actions";

const initialState: UserState = {
  id: 0,
  token: "",
  username: "",
  photo: "",
};

export const user = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case SET_AUTH: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
