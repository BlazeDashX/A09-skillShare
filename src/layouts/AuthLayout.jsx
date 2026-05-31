import { Outlet } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <div className='max-w-7xl mx-auto px-4 md:px-8'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;