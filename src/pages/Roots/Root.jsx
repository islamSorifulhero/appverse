import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, [location]);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            {isLoading ? (
                <div className="flex flex-1 justify-center items-center bg-gray-50">
                    <p className="text-xl font-semibold text-gray-600 animate-pulse">Loading...</p>
                </div>
            ) : (
                <div className="flex-1">
                    <Outlet />
                </div>
            )}
            <Footer />
            <ToastContainer
                position="top-center"
                autoClose={2000}
                theme="colored"
                pauseOnHover
                newestOnTop
            />
        </div>
    );
};

export default Root;
