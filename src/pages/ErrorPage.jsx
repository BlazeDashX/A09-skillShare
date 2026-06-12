import { Link } from "react-router-dom";
import PNF404 from "../assets/page-Not-Found-404.svg";

const ErrorPage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center bg-base-100 px-4 md:px-8">
            <div className="text-center max-w-xl mx-auto flex flex-col items-center">
                <div className=" flex justify-between items-center">
                    <div className="w-full max-w-[320px] sm:max-w-100 md:max-w- mt-10 ">
                        <img
                            src={PNF404}
                            alt="Page Not Found"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Text Content */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold mt-8 text-base-content">
                        Oops! Page not found.
                    </h1>
                    <p className="text-base-content/60 mt-3 text-sm md:text-base max-w-md">
                        The page you are looking for doesn't exist, has been removed, or the URL might be incorrect.
                    </p>
                    </div>
                </div>


                <div className="mt-8">
                    <Link
                        to="/"
                        className="btn btn-primary px-6 text-base tracking-wide shadow-md hover:shadow-lg transition-all duration-200"
                    >
                        Back to Home
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;