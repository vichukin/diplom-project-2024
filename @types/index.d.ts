type IAuthLogin = {
  password: string;
  email: string;
  rememberMe: boolean;
};

type IAuthRegistration = {
  password: string;
  email: string;
  fullName: string;
};

type IUser = {
  id: number;
  name: string;
  email: string;
};

type IAuthResponse = {
  accessToken: string;
  refreshToken: string;
  //user: IUser;
};
