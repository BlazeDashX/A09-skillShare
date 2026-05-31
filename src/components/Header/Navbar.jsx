import { use } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const navLinks = (
    <>
      <li><NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-bold" : ""}>Home</NavLink></li>
      <li><NavLink to="/apps" className={({ isActive }) => isActive ? "text-primary font-bold" : ""}>Skills</NavLink></li>
      {user && (
        <>
          <li><NavLink to="/my-profile" className={({ isActive }) => isActive ? "text-primary font-bold" : ""}>My Profile</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm rounded-xl px-4 my-2">
      {/* Mobile & Brand Section */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-2xl font-black gap-0 text-primary">
          Skill<span className="text-secondary">Swap</span>
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium">
          {navLinks}
        </ul>
      </div>

      {/* Auth Conditional Profile Target */}
      <div className="navbar-end">
        {user && user?.email ? (
          <div className="dropdown dropdown-end z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar online">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img 
                  alt={user?.displayName || "User profile"} 
                  src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} 
                />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-xl border border-base-200">
              <li className="px-4 py-2 border-b border-base-200 font-bold text-sm text-base-content/80">
                {user?.displayName || "Anonymous User"}
              </li>
              <li><Link to="/my-profile" className="justify-between">Profile<span className="badge badge-xs badge-primary">View</span></Link></li>
              <li><button onClick={handleSignOut} className="text-error font-medium">Logout</button></li>
            </ul>
          </div>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-6 shadow-md">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;