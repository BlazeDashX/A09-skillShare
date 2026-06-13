import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import bgImg from "../assets/bgImg.jpg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <div
      className="bg-fixed bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 min-h-screen flex flex-col justify-between bg-primary/10">
        <div>
          <Navbar />
          <main>
            <Outlet />
          </main>
        </div>

        <Footer />
      </div>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </div>
  );
};

export default MainLayout;