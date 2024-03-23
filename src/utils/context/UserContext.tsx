import { createContext } from "react";

import { useQuery } from "@tanstack/react-query";

import { userService } from "../services/user.service";

export const userContext = createContext<IUser | null>(null);

export const UserContext = ({ children }: { children: React.ReactNode }) => {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => userService.userProfile(),
  });

  return (
    <userContext.Provider value={user?.data ? user.data : null}>{children}</userContext.Provider>
  );
};
