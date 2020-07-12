import { AuthResponse } from "./types";
import { makeRequest } from "./makeRequest";
import { UserInfoResponse } from "./types";

export async function userInfoRequest(userId: number, token: string): Promise<UserInfoResponse> {
  const requestUri = makeRequest({
    method: "users.get",
    token,
    params: {
      user_ids: userId,
      fields: "first_name,last_name,photo_max",
    },
  });

  return await fetch(requestUri)
    .then(response => response.json())
    .then(
      (r: any): UserInfoResponse => ({
        username: `${r?.response?.[0].first_name} ${r?.response?.[0].last_name}`,
        photo: r?.response?.[0].photo_max,
      }),
    );
}

export async function authRequest(): Promise<AuthResponse> {
  const OAuthVK = require("electron-oauth-vk");

  const oauth = new OAuthVK(require("electron").remote.BrowserWindow, {
    clientID: 7531146,
    display: "page",
    scope: ["photos"],
    responseType: "token",
  });

  const request = async (): Promise<AuthResponse> => {
    const authData = await oauth
      .login()
      .then(
        (response: any): AuthResponse => ({
          token: response.access_token,
          expiresIn: +new Date() + Number(response.expires_in),
          id: Number(response.user_id),
        }),
      )
      .catch(console.error);

    localStorage.savedSession = JSON.stringify(authData);
    return authData;
  };

  if (localStorage.savedSession !== undefined) {
    const savedSession: AuthResponse = JSON.parse(localStorage.savedSession);
    return savedSession.expiresIn < +new Date() ? await request() : savedSession;
  }

  return await request();
}
