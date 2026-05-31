import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";

const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;