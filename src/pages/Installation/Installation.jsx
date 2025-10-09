import React, { useState } from 'react';
import { Download, Star } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import { useInstallation } from '../javaScript/function';

const parseSizeToNumber = (sizeStr) => {
    if (typeof sizeStr === 'number') return sizeStr;
    if (typeof sizeStr !== 'string') return 0;
    return parseFloat(sizeStr.replace('MB', '').trim());
};

const InstalledApps = () => {
    const { installedApps, handleUninstall } = useInstallation();

    const [sortBy, setSortBy] = useState('size_high_low');

    const onUninstall = (appId, appName) => {
        handleUninstall(appId);
        toast.info(`${appName} uninstalled successfully!`, {
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
        });
    };

    const sortApps = (apps, sortType) => {
        if (!apps || apps.length === 0) return [];

        const sorted = [...apps];

        sorted.sort((a, b) => {
            const sizeA = parseSizeToNumber(a.size);
            const sizeB = parseSizeToNumber(b.size);

            if (sortType === 'size_low_high') {
                return sizeA - sizeB;
            } else if (sortType === 'size_high_low') {
                return sizeB - sizeA;
            }

            return sizeB - sizeA;
        });

        return sorted;
    };

    const sortedInstalledApps = sortApps(installedApps, sortBy);

    return (
        <div className="max-w-5xl mx-auto my-12 px-4 md:px-0">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
                Your Installed Apps
            </h2>
            <p className="text-center text-gray-600 mb-8">
                Explore All Trending Apps on the Market developed by us
            </p>

            <div className="flex justify-between items-center mb-6">
                <p className="text-lg font-semibold text-gray-800">
                    {installedApps.length} Apps Found
                </p>

                <div className="relative">
                    <select
                        className="border border-gray-300 rounded-lg px-4 py-2 text-sm appearance-none pr-8 cursor-pointer"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="size_high_low">High-Low</option>
                        <option value="size_low_high">Low-High</option>

                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                {sortedInstalledApps.length > 0 ? (
                    sortedInstalledApps.map((app) => (
                        <div
                            key={app.id}
                            className="flex items-center justify-between border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={app.image}
                                    alt={app.name}
                                    className="w-12 h-12 object-cover rounded-md"
                                />
                                <div>
                                    <h4 className="text-base font-semibold text-gray-900">{app.name}</h4>
                                    <div className="flex items-center text-sm text-gray-600 space-x-3">
                                        <div className="flex items-center">
                                            <Download className="w-4 h-4 text-green-600 mr-1" />
                                            <span>{app.downloads}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Star className="w-4 h-4 text-yellow-500 mr-1" />
                                            <span>{app.rating}</span>
                                        </div>
                                        <span className="text-xs text-gray-500">
                                            {app.size} MB
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => onUninstall(app.id, app.name)}
                                className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg transition text-sm"
                            >
                                Uninstall
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 py-10 border border-dashed rounded-lg">
                        You have no installed apps yet. Install some!
                    </p>
                )}
            </div>

            <ToastContainer />
        </div>
    );
};

export default InstalledApps;