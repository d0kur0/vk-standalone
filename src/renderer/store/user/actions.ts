import { AuthAction, AuthPayload, ThunkType } from "./types";
import { authRequest, userInfoRequest } from "../../apiMethods/auth";

export const SET_AUTH = "SET_AUTH";

/* Action Creators */
export function setAuth(payload: AuthPayload): AuthAction {
  return {
    type: SET_AUTH,
    payload,
  };
}

/* Async Action Creators */
export function auth(): ThunkType {
  return async dispath => {
    const authResponse = await authRequest();
    const userInfo = await userInfoRequest(authResponse.id, authResponse.token);

    authResponse &&
      dispath(
        setAuth({
          ...authResponse,
          ...userInfo,
        }),
      );
  };
}
