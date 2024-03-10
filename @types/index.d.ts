enum EnumTokens {
  "ACCESS_TOKEN" = "accessToken",
  "REFRESH_TOKEN" = "refreshToken",
}

type IAuthForm = {
  password: string;
  email: string;
  rememberMe: boolean;
};

type IUser = {
  id: number;
  name: string;
  email: string;
};

type IAuthResponse = {
  accessToken: string;
  //user: IUser;
};
