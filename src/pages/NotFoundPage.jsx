import { Link } from "react-router-dom";
import PNF404 from "../assets/App-Error.png";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full flex flex-col bg-base-100 px-4 md:px-8 py-8 md:py-12 rounded-lg shadow-lg">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center gap-6">

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="w-full max-w-65 sm:max-w-[320px] md:max-w-105">
              <img
                src={PNF404}
                alt="Page Not Found"
                className="w-full h-auto object-contain animate-pulse"
                style={{ animationDuration: "4s" }}
              />
            </div>

            <div className="text-center md:text-left space-y-3 max-w-md">
              <h1 className="text-3xl md:text-4xl font-black text-base-content leading-tight">
                Item Not Found
              </h1>

              <p className="text-base-content/60 text-sm md:text-base font-medium leading-relaxed">
                Sorry, the item you're looking for could not be found. It may have been removed, is no longer available, or the link may be incorrect.
              </p>
            </div>
          </div>

          <div className="mt-4">
            <Link
              to="/"
              className="btn btn-primary px-8 text-sm font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;