import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Download, Star, MessageSquare } from "lucide-react";

const SingleApp = () => {
    const { id } = useParams();
    const [app, setApp] = useState(null);

    useEffect(() => {
        fetch("/allAppData.json")
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((item) => item.id === parseInt(id));
                setApp(found);
            });
    }, [id]);

    if (!app) {
        return <p className="text-center mt-10 text-lg text-gray-600">Loading...</p>;
    }

    return (
        <div className="max-w-5xl mx-auto px-4 my-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                    src={app.image}
                    alt={app.name}
                    className="w-48 h-48 rounded-2xl object-cover shadow-md"
                />

                <div className="flex-1">
                    <h1 className="text-3xl font-semibold mb-1">{app.name}</h1>
                    <p className="text-gray-600 mb-4">
                        Developed by <span className="text-[#632EE3] font-medium">{app.developer || "hero.io"}</span>
                    </p>

                    <div className="flex flex-wrap gap-8 text-gray-700 mb-4">
                        <div className="flex items-center gap-2">
                            <Download className="w-5 h-5 text-green-600" />
                            <span><b>{app.downloads}</b> Downloads</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-500" />
                            <span><b>{app.rating}</b> Ratings</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-purple-600" />
                            <span><b>{app.reviews || "54K"}</b> Reviews</span>
                        </div>
                    </div>

                    <button className="btn bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">
                        Install Now ({app.size || "291 MB"})
                    </button>
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">Ratings</h2>
                <div className="space-y-3">
                    {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center gap-2">
                            <span className="w-12 text-gray-700">{star} star</span>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div
                                    className="bg-orange-500 h-3 rounded-full"
                                    style={{
                                        width: `${(Math.random() * 80 + 20).toFixed(0)}%`,
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-3">Description</h2>
                <p className="text-gray-700 leading-relaxed">
                    {app.description ||
                        `This app is designed to enhance productivity and focus by combining
            smart tools, task tracking, and performance analytics. Users can
            organize tasks, monitor progress, and manage time effectively.
            Whether you’re working, studying, or creating — this app helps you
            stay disciplined and motivated throughout the day.`}
                </p>
            </div>

            <footer className="mt-12 text-center text-gray-500 text-sm border-t pt-4">
                © {new Date().getFullYear()} HERO.IO — All rights reserved.
            </footer>
        </div>
    );
};

export default SingleApp;
