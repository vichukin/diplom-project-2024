import { removeFromStorage, saveTokenStorage } from "./auth.token.service";

import { axiosClassic } from "../api/interceptors";

export const authService = {
  async main(type: "login" | "registration", data: IAuthForm) {
    const response = await axiosClassic.post<IAuthResponse>(`/authorization/${type}`, data);

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

    return response;
  },

  async getNewTokens() {
    const response = await axiosClassic.post<IAuthResponse>("/authorization/access-token");

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

    return response;
  },

  async logout() {
    const response = await axiosClassic.post<boolean>("/authorization/logout");

    if (response.data) removeFromStorage();

    return response;
  },
};
