import { removeFromStorage, saveTokensStorage } from "./auth.token.service";

import { axiosClassic, axiosWithAuth } from "../api/interceptors";

export const authService = {
  async login(data: IAuthLogin) {
    const response = await axiosClassic.post<IAuthResponse>(`/authorization/login`, data);
    if (response.data.accessToken && response.data.refreshToken) {
      saveTokensStorage(response.data.accessToken, response.data.refreshToken);
    }
    return response;
  },

  async gett(data: IAuthLogin) {
    const response = await axiosWithAuth.get<IAuthResponse>(`/authorization/getadmin`);
    console.log(response);
    return response;
  },

  async registration(data: IAuthRegistration) {
    const response = await axiosClassic.post<IAuthResponse>(`/authorization/registration`, data);
    if (response.data.accessToken && response.data.refreshToken) {
      saveTokensStorage(response.data.accessToken, response.data.refreshToken);
    }
    return response;
  },

  async getNewTokens() {
    const response = await axiosClassic.post<IAuthResponse>("/authorization/access-token");

    if (response.data.accessToken && response.data.refreshToken) {
      saveTokensStorage(response.data.accessToken, response.data.refreshToken);
    }

    return response;
  },

  async logout() {
    const response = await axiosClassic.post<boolean>("/authorization/logout");

    if (response.data) removeFromStorage();

    return response;
  },
};
