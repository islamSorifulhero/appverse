import React, { useEffect, useState } from "react";
import { Star, Download } from "lucide-react";

const AllApps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/allAppData.json")
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="my-12 px-4 md:px-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800">Our All Applications</h2>
      <p className="text-center mb-8 text-[#627382]">Explore All Apps on the Market developed by us. We code for Millions</p>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2>(20) Apps Found</h2>
        </div>
        <div>
          <label className="input">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search Apps" />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {apps.map((app) => (
          <div
            key={app.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={app.image}
              alt={app.name}
              className="w-35 h-35 justify-center items-center flex mx-auto object-cover rounded-t-2xl"
            />
            <h3 className="font-semibold text-lg text-gray-800 mb-2">{app.name}</h3>
            {/* <p className="text-sm text-gray-500">{app.downloads}</p>
            <p className="text-sm mt-1">{app.rating} ⭐</p> */}

            <div className="flex justify-between items-center text-gray-600 text-sm">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>{app.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Download className="w-4 h-4 text-blue-500" />
                <span>{app.downloads}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
