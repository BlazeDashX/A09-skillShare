import { use, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { toast } from "react-hot-toast";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailInputRef = useRef();

  const from = location.state || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Welcome back!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError("Invalid credentials. Double check your inputs.");
        toast.error(err.code);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        toast.success("Logged in successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleForgotPasswordRedirect = () => {
    const emailValue = emailInputRef.current?.value || "";
    navigate("/auth/forgot-password", { state: { email: emailValue } });
  };

  return (
    <div className="hero bg-base-200 min-h-[85vh] rounded-2xl my-4 px-4">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 max-w-5xl w-full justify-center items-center">
        <div className="text-center lg:text-left lg:max-w-md">
          <h1 className="text-5xl font-black leading-tight text-base-content">
            Access <span className="text-primary">SkillSwap</span>
          </h1>
          <p className="py-6 text-base-content/70 font-medium">
            Log back in to manage your current booking records, communicate with session providers, or update your profile.
          </p>
        </div>
        
        {/* Uniform Size Card Container */}
        <div className="card bg-base-100 w-full max-w-md min-h-145 shrink-0 shadow-2xl border border-base-200 flex flex-col">
          <form onSubmit={handleLogin} className="card-body p-6 w-full flex flex-col justify-between grow">
            
            {/* Top Section: Inputs */}
            <div>
              <h2 className="text-2xl font-bold text-center text-base-content mb-6">Login Account</h2>
              
              <div className="mb-4 w-full">
                <label className="block text-sm font-semibold mb-2 text-base-content/80">Email Address</label>
                <input 
                  ref={emailInputRef}
                  name="email" 
                  type="email" 
                  className="input input-bordered w-full" 
                  placeholder="name@example.com" 
                  required 
                />
              </div>

              <div className="mb-2 w-full">
                <label className="block text-sm font-semibold mb-2 text-base-content/80">Password</label>
                <div className="relative w-full">
                  <input 
                    name="password" 
                    type={showPassword ? "text" : "password"} 
                    className="input input-bordered w-full pr-14" 
                    placeholder="••••••••" 
                    required 
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-base-content/50 hover:text-primary transition z-10"
                  >
                    {showPassword ? "HIDE" : "SHOW"}
                  </button>
                </div>
                <div className="text-right mt-2">
                  <button 
                    type="button" 
                    onClick={handleForgotPasswordRedirect} 
                    className="text-xs link link-hover text-secondary font-semibold"
                  >
                    Forgot password?
                  </button>
                </div>
                {error && <p className="text-error text-xs font-semibold mt-2">{error}</p>}
              </div>
            </div>

            {/* Bottom Section: Actions Anchored to Bottom */}
            <div>
              <button type="submit" className="btn btn-primary w-full shadow-lg mt-2">Login</button>
              
              <div className="divider text-xs text-base-content/40 font-bold uppercase my-3">Or</div>
              
              <button type="button" onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary w-full">
                Continue with Google
              </button>

              <p className="font-semibold text-center pt-4 text-sm text-base-content/70">
                Don't have an account?{" "}
                <Link className="text-secondary link link-hover font-bold" to="/auth/register">Register</Link>
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;