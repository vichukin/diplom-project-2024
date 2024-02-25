import { Outlet } from "react-router-dom";

import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
