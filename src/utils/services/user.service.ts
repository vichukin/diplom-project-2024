import { axiosWithAuth } from "../api/interceptors";

export const userService = {
  async userProfile() {
    try {
      const response = await axiosWithAuth.get<IUser>("/User/getUser");
      return response;
    } catch (error) {
      return null;
    }
  },
};
