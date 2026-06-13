import { useEffect, useState, use } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import NotFoundPage from "./NotFoundPage";
import "react-toastify/dist/ReactToastify.css";

const SkillDetails = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);

  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);

  const [bookingNotes, setBookingNotes] = useState("");
  const [bookingDate, setBookingDate] = useState("");

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        const foundSkill = data.find((item) => item.id === parseInt(id));
        setSkill(foundSkill);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching skill details:", err);
        setLoading(false);
      });
  }, [id]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    toast.success(`Session Booked Successfully for ${skill?.name}!`, {
      position: "top-center",
      autoClose: 4000,
      theme: "dark",
    });

    setBookingNotes("");
    setBookingDate("");
  };

  if (loading) {
    return (
      <div className="min-h-[50vh] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!skill) {
    return <NotFoundPage />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 px-2">
      
      {/* Left Column */}
      <div className="lg:col-span-7 space-y-6">
        <div className="card bg-base-100 shadow-xl border border-base-200 overflow-hidden">
          
          <figure className="h-64 md:h-96 relative">
            <img
              src={skill.image}
              alt={skill.name}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 badge badge-secondary font-black tracking-wider p-3 shadow-lg">
              {skill.category}
            </span>
          </figure>

          <div className="card-body p-6 space-y-4">
            <h1 className="text-2xl md:text-3xl font-black text-base-content leading-tight">
              {skill.name}
            </h1>

            <div className="flex flex-wrap gap-4 items-center justify-between border-y border-base-200 py-3 text-sm font-semibold">
              <span className="flex items-center gap-1 text-amber-500">
                ★ <span className="text-base-content">{skill.rating} Rating</span>
              </span>

              <span className="text-primary font-bold text-lg">
                Value: ${skill.price}/hr
              </span>

              <span className="badge badge-neutral px-3 py-2 text-xs font-bold">
                ⌛ {skill.duration || "2 hours"}
              </span>
            </div>

            <div className="space-y-1">
              <h4 className="text-xs uppercase tracking-widest font-black text-base-content/40">
                Description Blueprint
              </h4>
              <p className="text-base-content/70 leading-relaxed font-medium text-sm md:text-base">
                {skill.description}
              </p>
            </div>

            <div className="bg-base-200/50 rounded-xl p-4 border border-base-200 space-y-2">
              <h4 className="text-xs uppercase tracking-widest font-black text-secondary">
                Authorized Skill Provider
              </h4>
              <div className="text-sm font-bold text-base-content">
                <p>
                  Name:{" "}
                  <span className="font-medium opacity-80">
                    {skill.providerName}
                  </span>
                </p>
                <p className="mt-0.5">
                  Email:{" "}
                  <span className="font-medium opacity-80 text-primary">
                    {skill.providerEmail}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:col-span-5">
        <div className="card bg-base-100 border border-base-200 shadow-xl sticky top-6">
          <div className="card-body p-6 space-y-4">
            
            <div>
              <h2 className="text-xl font-black text-base-content">
                Secure Exchange Session
              </h2>
              <p className="text-xs text-base-content/50 font-medium mt-0.5">
                Lock down synchronization parameters with your peer specialist.
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4">

              {/* Name */}
              <div className="form-control flex flex-col gap-1">
                <label className="label pt-0">
                  <span className="label-text font-bold text-xs text-base-content/70">
                    Your Name
                  </span>
                </label>
                <input
                  type="text"
                  value={user?.displayName || "Anonymous User"}
                  disabled
                  className="input input-bordered bg-base-200 text-base-content/50 font-medium text-sm"
                />
              </div>

              {/* Email */}
              <div className="form-control flex flex-col gap-1">
                <label className="label pt-0">
                  <span className="label-text font-bold text-xs text-base-content/70">
                    Your Registered Email Address
                  </span>
                </label>
                <input
                  type="email"
                  value={user?.email || ""}
                  disabled
                  className="input input-bordered bg-base-200 text-base-content/50 font-medium text-sm"
                />
              </div>

              {/* Date */}
              <div className="form-control flex flex-col gap-1">
                <label className="label pt-0">
                  <span className="label-text font-bold text-xs text-base-content/70">
                    Target Strategy Date
                  </span>
                </label>
                <input
                  type="date"
                  required
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="input input-bordered text-sm font-semibold"
                />
              </div>

              {/* Notes */}
              <div className="form-control flex flex-col gap-1">
                <label className="label pt-0">
                  <span className="label-text font-bold text-xs text-base-content/70">
                    Special Exchange Instructions / Scope Notes
                  </span>
                </label>
                <textarea
                  placeholder="Outline your requirements..."
                  required
                  value={bookingNotes}
                  onChange={(e) => setBookingNotes(e.target.value)}
                  className="textarea textarea-bordered text-sm font-medium h-24 resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="btn btn-primary w-full font-bold uppercase tracking-wider mt-2 shadow-lg shadow-primary/20"
              >
                Confirm Booking Contract
              </button>

            </form>

          </div>
        </div>
      </div>

    </div>
  );
};

export default SkillDetails;