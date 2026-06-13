import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage"; // Or your new NotFound component!
import MyProfile from "../pages/MyProfile";
import Home from "../pages/Home";
import SkillDetails from "../pages/SkillDetails";
import PrivateRoute from "./PrivateRoute";
import AllSkills from "../pages/AllSkills"; 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/skills",
        element: <AllSkills />,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/skill/:id",
        element: (
          <PrivateRoute><SkillDetails /></PrivateRoute>
              
        ),
      },
      {
        path: "*",
        element: <ErrorPage />, 
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);