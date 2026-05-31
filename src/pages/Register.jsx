import { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { toast } from "react-hot-toast";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Include at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("Include at least one lowercase letter.");
      return;
    }

    setPasswordError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Account created successfully!");
            navigate("/");
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        toast.success("Signed up with Google successfully!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-[85vh] rounded-2xl my-4 px-4">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 max-w-5xl w-full justify-center items-center">
        <div className="text-center lg:text-left lg:max-w-md">
          <h1 className="text-5xl font-black leading-tight text-base-content">
            Join <span className="text-primary">SkillSwap</span>
          </h1>
          <p className="py-6 text-base-content/70 font-medium">
            Create an account to start sharing your technical knowledge, book specialized consultation sessions, and connect with peer engineers.
          </p>
        </div>

        {/* Uniform Size Card Container */}
        <div className="card bg-base-100 w-full max-w-md min-h-145 shrink-0 shadow-2xl border border-base-200 flex flex-col">
          <form onSubmit={handleRegister} className="card-body p-6 w-full flex flex-col justify-between grow">
            
            {/* Top Section: Inputs */}
            <div>
              <h2 className="text-2xl font-bold text-center text-base-content mb-4">Register Account</h2>
              
              <div className="mb-3 w-full">
                <label className="block text-sm font-semibold mb-1 text-base-content/80">Full Name</label>
                <input name="name" type="text" className="input input-bordered w-full input-sm md:input-md" placeholder="John Doe" required />
              </div>

              <div className="mb-3 w-full">
                <label className="block text-sm font-semibold mb-1 text-base-content/80">Photo URL</label>
                <input name="photo" type="text" className="input input-bordered w-full input-sm md:input-md" placeholder="https://example.com/avatar.jpg" required />
              </div>

              <div className="mb-3 w-full">
                <label className="block text-sm font-semibold mb-1 text-base-content/80">Email Address</label>
                <input name="email" type="email" className="input input-bordered w-full input-sm md:input-md" placeholder="name@example.com" required />
              </div>

              <div className="mb-3 w-full">
                <label className="block text-sm font-semibold mb-1 text-base-content/80">Password</label>
                <div className="relative w-full">
                  <input 
                    name="password" 
                    type={showPassword ? "text" : "password"} 
                    className="input input-bordered w-full pr-14 input-sm md:input-md" 
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
                {passwordError && <p className="text-error text-xs font-semibold mt-1">{passwordError}</p>}
              </div>
            </div>

            {/* Bottom Section: Actions Anchored to Bottom */}
            <div>
              <button type="submit" className="btn btn-primary w-full shadow-lg mt-2">Register</button>
              
              <div className="divider text-xs text-base-content/40 font-bold uppercase my-2">Or</div>
              
              <button type="button" onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary w-full">
                Sign up with Google
              </button>

              <p className="font-semibold text-center pt-3 text-sm text-base-content/70">
                Already have an account?{" "}
                <Link className="text-secondary link link-hover font-bold" to="/auth/login">Login</Link>
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;