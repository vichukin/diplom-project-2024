import { createContext } from "react";

import { authService } from "@/services";

import { useQuery } from "@tanstack/react-query";

export const userContext = createContext<IAuthResponse | null>(null);

export const UserContext = ({ children }: { children: React.ReactNode }) => {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      authService.login({
        password: "zaq1@WSX",
        email: "test",
        rememberMe: true,
      }),
  });

  const { data: gett } = useQuery({
    queryKey: ["user11"],
    queryFn: () =>
      authService.gett({
        password: "zaq1@WSX",
        email: "test",
        rememberMe: true,
      }),
  });

  console.log(gett);
  return <userContext.Provider value={user?.data ?? null}>{children}</userContext.Provider>;
};
