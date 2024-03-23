import { useContext, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Footer, Header } from "@/components";

import { Home } from "@/pages";

import { LINKS } from "@/config/pages-url.config";

import { userContext } from "../context/UserContext";

export const withAuth =
  (Component: React.ComponentType): React.FC =>
  props => {
    const user = useContext(userContext);
    const navigate = useNavigate();

    useLayoutEffect(() => {
      if (user) {
        navigate(LINKS.HOME);
        toast.error("You are already signed in");
      }
    }, []);

    if (!user) {
      return <Component {...props} />;
    } else {
      return (
        <>
          <Header />
          <Home />
          <Footer />
        </>
      );
    }
  };
