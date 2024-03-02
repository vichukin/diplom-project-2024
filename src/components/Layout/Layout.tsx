import { Outlet } from "react-router-dom";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { dropdownMenuClick } from "./helpers/dropdownMenuClick";

import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout: React.FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div onClick={dropdownMenuClick}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </LocalizationProvider>
  );
};
