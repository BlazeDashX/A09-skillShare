import { useState, use } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const MyProfile = () => {
  // Pull the current user profile data and context sync helper from your AuthProvider
  const { user, setUser } = use(AuthContext);
  
  // Local states to handle editing view toggle and controlled inputs
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user?.displayName || "");
  const [newPhotoURL, setNewPhotoURL] = useState(user?.photoURL || "");
  const [updating, setUpdating] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    
    if (!newName.trim() || !newPhotoURL.trim()) {
      toast.warning("⚠️ Profile attributes cannot be left empty.");
      return;
    }

    setUpdating(true);
    const auth = getAuth();

    try {
      await updateProfile(auth.currentUser, {
        displayName: newName,
        photoURL: newPhotoURL,
      });

      if (setUser) {
        setUser({
          ...auth.currentUser,
          displayName: newName,
          photoURL: newPhotoURL,
        });
      }

      toast.success("🚀 Profile records compiled and updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Profile Synchronization Error:", error);
      toast.error(`❌ Update Failed: ${error.message}`);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-10 px-4 bg-base-200/30 rounded-3xl my-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="card w-full max-w-xl bg-base-100 border border-base-200 shadow-2xl rounded-2xl overflow-hidden relative z-10">
        
        <div className="h-32 bg-linear-to-r from-primary/80 to-secondary/80 w-full relative" />

        <div className="card-body p-6 md:p-10 -mt-16 flex flex-col items-center text-center">
          
          <div className="avatar mb-4">
            <div className="w-28 h-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 shadow-xl bg-neutral">
              <img 
                src={user?.photoURL || "https://i.ibb.co/vks6pS6/default-avatar.png"} 
                alt="Active Authenticated User" 
                className="object-cover"
              />
            </div>
          </div>

          {!isEditing ? (
            /* DISPLAY MODE VIEW LAYER */
            <div className="w-full space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-base-content tracking-tight">
                  {user?.displayName || "Anonymous Specialist"}
                </h2>
                <div className="badge badge-primary font-bold text-[10px] uppercase tracking-widest mt-1.5 px-3 py-2">
                  Verified Skill Exchange Peer
                </div>
              </div>

              <div className="bg-base-200/60 border border-base-200 rounded-xl p-4 text-left space-y-2">
                <div className="text-xs font-black uppercase tracking-wider text-base-content/40">
                  Account Communications Route
                </div>
                <p className="text-sm font-semibold text-base-content/85 break-all">
                  {user?.email || "No public email registered"}
                </p>
              </div>

              <button
                onClick={() => {
                  setNewName(user?.displayName || "");
                  setNewPhotoURL(user?.photoURL || "");
                  setIsEditing(true);
                }}
                className="btn btn-outline btn-primary btn-sm px-6 font-bold tracking-wide rounded-lg"
              >
                ⚙️ Update Profile Info
              </button>
            </div>
          ) : (
            <form onSubmit={handleUpdateProfile} className="w-full text-left space-y-4 animate-fadeIn">
              <div className="border-b border-base-200 pb-2 mb-2">
                <h3 className="font-black text-lg text-base-content">Modify Profile Attributes</h3>
                <p className="text-xs text-base-content/50 font-medium">Update credentials matching your community branding parameters.</p>
              </div>

              <div className="form-control w-full">
                <label className="label py-1">
                  <span className="label-text font-bold text-xs text-base-content/70">Public Profile Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full exchange identity"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="input input-bordered text-sm font-medium w-full"
                  required
                  disabled={updating}
                />
              </div>

              <div className="form-control w-full">
                <label className="label py-1">
                  <span className="label-text font-bold text-xs text-base-content/70">Profile Frame Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="Paste direct verification image URL link"
                  value={newPhotoURL}
                  onChange={(e) => setNewPhotoURL(e.target.value)}
                  className="input input-bordered text-sm font-medium w-full"
                  required
                  disabled={updating}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-2 justify-end">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="btn btn-ghost btn-sm font-bold text-xs tracking-wider uppercase order-2 sm:order-1"
                  disabled={updating}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary btn-sm px-6 font-bold text-xs tracking-wider uppercase order-1 sm:order-2 shadow-md"
                  disabled={updating}
                >
                  {updating ? (
                    <span className="loading loading-spinner loading-xs"></span>
                  ) : (
                    "Save Configurations"
                  )}
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};

export default MyProfile;