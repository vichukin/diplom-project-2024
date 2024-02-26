import { Outlet } from "react-router-dom";

import { dropdownMenuClick } from "./helpers/dropdownMenuClick";

import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout: React.FC = () => {
  return (
    <>
      <div onClick={dropdownMenuClick}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};
