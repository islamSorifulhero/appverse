import React, { useEffect, useState } from 'react';
import TrendingApp from '../TrendingApp/TrendingApp';

const TrendingApps = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/homeAppData.json').then((res) => res.json()).then((data) => {
            setApps(data); setLoading(false);
        })
            .catch((error) => {
                console.error('Error fetching apps:', error);
                setLoading(false);
            });
    }, []);

    return (
        <section className="my-12 px-4 md:px-8">
            <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
                Trending Apps
            </h2>

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
        </section>
    );
};

// function AppList({ promise }) {
//     const apps = React.use(promise);
//     return (
//         <div>
//             {
//                 apps.map((singleApp) => (
//                     <TrendingApp key={singleApp.id} singleApp={singleApp}></TrendingApp>
//                 ))
//             }
//         </div>
//     )
// }

export default TrendingApps;