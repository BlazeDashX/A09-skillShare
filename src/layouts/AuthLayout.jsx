import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import bgImg from "../assets/bgImg.jpg";
import Footer from "../components/Footer/Footer";

const AuthLayout = () => {
  return (
<div
  className="bg-fixed bg-center bg-cover bg-no-repeat"
  style={{ backgroundImage: `url(${bgImg})` }}>
    <div
      className="max-w-7xl mx-auto px-2 sm:px-4 min-h-screen flex flex-col justify-between "
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
    </div>
  );
};

export default AuthLayout;