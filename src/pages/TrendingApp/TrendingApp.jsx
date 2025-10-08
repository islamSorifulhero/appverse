import React from "react";
import { Star, Download } from "lucide-react";

const TrendingApp = ({ singleApp }) => {
    const { name, image, rating, downloads } = singleApp;

    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <img
                src={image}
                alt={name}
                className="w-full h-40 object-cover rounded-t-2xl"
            />
            <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{name}</h3>
                <div className="flex justify-between items-center text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Download className="w-4 h-4 text-blue-500" />
                        <span>{downloads}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingApp;
