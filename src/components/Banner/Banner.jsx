import React from 'react';
import playStore from "../../assets/playstore.png";
import appStore from "../../assets/appstore.png";
import hero from '../../assets/hero.png'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 pt-4">
                <div className="hero-content text-center">
                    <div className="w-11/12 mx-auto">
                        <h1 className="text-5xl font-bold">We Build <br /> <span className='text-[#9F62F2] font-bold'>Productive</span> Apps</h1>
                        <p className="py-6 text-[#627382]">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                        <div className='mb-6 animate__animated animate__pulse animate__infinite'>
                            <a href="https://play.google.com/store/games?hl=en"><button className="font-bold mr-3 btn border-red-600"><img src={playStore} alt="Google Play" />Google Play</button></a>
                            <a href="https://www.apple.com/app-store/"><button className="btn ml-3 border-black"><img src={appStore} alt="App Store" />App Store</button></a>
                        </div>
                        <img className='mx-auto w-160' src={hero} alt="" />
                    </div>
                </div>
            </div>
            <div className="w-full text-white py-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                <h1 className='mb-6 text-4xl font-bold text-center'>Trusted by Millions, Built for You</h1>
                <div className="sm:flex justify-center items-center gap-8">
                    <nav className="flex flex-col text-center">
                        <span className='text-[14px]'>Total Downloads</span>
                        <span className="font-extrabold text-6xl my-2">29.6M</span>
                        <span className='text-[14px]'>21% More Than Last Month</span>
                    </nav>

                    <nav className="flex flex-col text-center">
                        <span className='text-[14px]'>Total Reviews</span>
                        <span className="font-extrabold text-6xl my-2">906M</span>
                        <span className='text-[14px]'>46% More Than Last Month</span>
                    </nav>

                    <nav className="flex flex-col text-center">
                        <span className='text-[14px]'>Active Apps</span>
                        <span className="font-extrabold text-6xl my-2">132+</span>
                        <span className='text-[14px]'>31 More Will Launch</span>
                    </nav>
                </div>
            </div>
        </div>
    );
};
export default Banner;