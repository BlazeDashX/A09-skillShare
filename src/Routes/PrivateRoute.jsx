import { use } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center items-center gap-4">
        <span className="loading loading-bars loading-lg text-primary"></span>
        <p className="text-sm font-bold text-base-content/50 animate-pulse">Verifying Security Credentials...</p>
      </div>
    );
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate to="/auth/login" state={location.pathname} replace />;
};

export default PrivateRoute;