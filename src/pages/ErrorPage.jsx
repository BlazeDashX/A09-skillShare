import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

const ErrorPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 min-h-screen flex flex-col justify-between">
            <Navbar />
            <div className="text-center my-auto py-20">
                <h2 className="text-9xl font-extrabold text-error">404</h2>
                <p className="text-2xl font-semibold mt-4">Oops! Page not found.</p>
                <p className="text-base-content/60 mt-2">The page you are looking for doesn't exist or has been moved.</p>
            </div>
            <Footer />
        </div>
    );
};

export default ErrorPage;