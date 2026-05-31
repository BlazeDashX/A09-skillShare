import { Outlet } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 md:px-8'>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-200px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;