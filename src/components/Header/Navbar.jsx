import React from 'react';
import logo from "../../assets/logo.png";
import github from "../../assets/github.png"

const Navbar = () => {
    return (
        <div className="navbar w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Apps</a></li>
                        <li><a>Installation</a></li>
                    </ul>
                </div>
                <div className="flex justify-center items-center gap-2 cursor-pointer">
                    <div>
                        <img className='w-8 h-8' src={logo} alt="" />
                    </div>
                    <h1><span className='text-xl font-extrabold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</span></h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Apps</a></li>
                    <li><a>Installation</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold text-[14px]"><img src={github} alt="" />Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;