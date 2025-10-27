import React, { useEffect, useState } from 'react';
import TrendingApp from '../TrendingApp/TrendingApp';
import { Link } from 'react-router';
import "animate.css"

const TrendingApps = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/homeAppData.json')
            .then((res) => res.json())
            .then((data) => {
                setApps(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching apps:', error);
                setLoading(false);
            });
    }, []);

    return (
        <section className="my-12 px-4 md:px-8">
            <h2 className="text-3xl font-semibold text-center mb-1 text-gray-800">
                Trending Apps
            </h2>
            <p className='text-center mb-12 text-gray-700'>Explore All Trending Apps on the Market developer by us</p>

            {loading ? (
                <p className="text-center text-gray-500 text-lg">Loading apps...</p>
            ) : apps.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">No apps found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {apps.map((app) => (
                        <TrendingApp key={app.id} singleApp={app} />
                    ))}
                </div>
            )}

            <div className='flex justify-center'>
                <Link
                    to="/Apps"
                    className='mt-10 inline-block px-8 py-3 rounded-xl text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold transition hover:opacity-90 animate__animated animate__pulse animate__infinite'> Show All
                </Link>
            </div>
        </section>
    );
};

export default TrendingApps;