import React from 'react';
import errorImg from "../../assets/error-404.png";
import { Link } from 'react-router';

const ErrorPages = () => {
    return (
        <div>
            <img className='flex mx-auto my-10 w-85 h-85' src={errorImg} alt="" />
            <h1 className='text-center text-4xl font-bold text-gray-700'>Oops, page not found!</h1>
            <p className='text-center text-gray-500 mt-2'>The page you are looking for is not available.</p>
            <div className='flex justify-center'>
                <Link
                    to="/"
                    className='mt-3 mb-5 inline-block px-8 py-3 rounded-xl text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold transition hover:opacity-90'
                >
                    Go Back!
                </Link>
            </div>
        </div>
    );
};

export default ErrorPages;