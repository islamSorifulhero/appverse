import React from "react";
import { Link } from 'react-router';
import { Star, Download } from "lucide-react";

const TrendingApp = ({ singleApp }) => {
    const { id, name, image, rating, downloads, companyName } = singleApp; 

    return (
        <Link to={`/apps/${id}`} className="block">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-[1.02]">
                
                <div className="flex justify-center items-center pt-4">
                    <img
                        src={image}
                        alt={name}
                        className="w-24 h-24 object-cover rounded-xl" 
                    />
                </div>
                
                <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-800 mb-1 truncate">{name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{companyName}</p> 

                    <div className="flex justify-between items-center text-gray-600 text-sm">
                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span>{rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Download className="w-4 h-4 text-green-600" />
                            <span>{downloads}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TrendingApp;