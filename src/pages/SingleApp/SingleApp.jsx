import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Download, Star, MessageSquare } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useInstallation } from "../javaScript/function";

const parseCountToNumber = (countStr) => {
    if (typeof countStr !== 'string') return 0;
    const value = parseFloat(countStr);
    const lastChar = countStr.slice(-1).toUpperCase();

    if (lastChar === 'M') {
        return value * 1000000;
    } else if (lastChar === 'B') {
        return value * 1000000000;
    } else if (lastChar === 'K') {
        return value * 1000;
    }
    return value;
};

const SingleApp = () => {
    const { id } = useParams();
    const [app, setApp] = useState(null);
    const [installed, setInstalled] = useState(false);
    const { isInstalled, handleInstall: installApp } = useInstallation();

    useEffect(() => {
        fetch("/allAppData.json")
            .then((res) => res.json())
            .then((data) => {
                const foundApp = data.find((item) => item.id === parseInt(id));
                setApp(foundApp);
                if (foundApp && isInstalled(foundApp.id)) {
                    setInstalled(true);
                }
            })
            .catch((err) => console.log(err));
    }, [id, isInstalled]);

    const handleInstall = () => {
        if (!app) return;
        installApp(app);
        setInstalled(true);
        toast.success(`${app.name} installed successfully`, {
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
        });
    };

    if (!app) {
        return <p className="text-center mt-10 text-gray-500 text-lg">Loading...</p>;
    }

    const ratings = [
        { stars: 5, count: 150 },
        { stars: 4, count: 80 },
        { stars: 3, count: 30 },
        { stars: 2, count: 10 },
        { stars: 1, count: 5 },
    ];

    const totalRatings = ratings.reduce((acc, r) => acc + r.count, 0);
    const paragraphs = app.description.split("\n\n");

    return (
        <div className="max-w-5xl mx-auto my-12 px-4 md:px-0">
            <div className="flex flex-col md:flex-row items-start gap-8 border rounded-xl p-6 shadow">
                <img
                    src={app.image}
                    alt={app.name}
                    className="w-48 h-48 object-cover rounded-lg"
                />

                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{app.name}</h2>
                    <p className="text-gray-600 mb-4">
                        Developed by{" "}
                        <span className="text-blue-600 font-medium">{app.developer}</span>
                    </p>

                    <div className="flex flex-wrap gap-8 mb-5">
                        <div className="flex flex-col items-center">
                            <Download className="text-green-600" />
                            <p className="text-lg font-bold">{parseCountToNumber(app.downloads)}</p>
                            <p className="text-gray-500 text-sm">Downloads</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Star className="text-yellow-500" />
                            <p className="text-lg font-bold">{app.rating}</p>
                            <p className="text-gray-500 text-sm">Avg Rating</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <MessageSquare className="text-purple-500" />
                            <p className="text-lg font-bold">{app.reviews}</p>
                            <p className="text-gray-500 text-sm">Total Reviews</p>
                        </div>
                    </div>

                    <button
                        onClick={handleInstall}
                        disabled={installed}
                        className={`${installed
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-green-500 hover:bg-green-600"
                            } text-white font-semibold px-6 py-2 rounded-lg transition`}
                    >
                        {installed ? "Installed" : `Install Now (${app.size})`}
                    </button>
                </div>
            </div>

            <div className="mt-10">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Ratings Breakdown
                </h3>
                {ratings.map((r) => {
                    const percent = (r.count / totalRatings) * 100;
                    return (
                        <div key={r.stars} className="flex items-center gap-3 mb-2">
                            <span className="w-12 text-gray-700">{r.stars} ★</span>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div
                                    className="h-3 bg-yellow-400 rounded-full"
                                    style={{ width: `${percent}%` }}
                                ></div>
                            </div>
                            <span className="w-10 text-right text-gray-700">{r.count}</span>
                        </div>
                    );
                })}
            </div>

            <div className="mt-10">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Description</h3>
                <p className="text-gray-700 leading-relaxed">
                    {paragraphs.map((paragraph, index) => (
                        <React.Fragment key={index}>
                            {paragraph}
                            {index < paragraphs.length - 1 && <><br /><br /></>}
                        </React.Fragment>
                    ))}
                </p>
            </div>

            <ToastContainer />
        </div>
    );
};

export default SingleApp;
