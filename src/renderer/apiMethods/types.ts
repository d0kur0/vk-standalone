export type AuthResponse = {
  token: string;
  expiresIn: number;
  id: number;
};

export type UserInfoResponse = {
  username: string;
  photo: string;
};

export type RequestParams = {
  method: string;
  token: string;
  params: object;
};
