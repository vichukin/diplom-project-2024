type IAuthLogin = {
  password: string;
  email: string;
};

type IAuthRegistration = {
  password: string;
  email: string;
};

type IUser = {
  id: number;
  email: string;
  firstName: string;
  surname: string;
};

type IAuthResponse = {
  accessToken: string;
  refreshToken: string;
};
