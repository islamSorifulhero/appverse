import React, { useEffect, useState } from "react";
import { Star, Download } from "lucide-react";
import { Link } from "react-router";

const AllApps = () => {
  const [apps, setApps] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/allAppData.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setFilteredApps(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setLoading(true);

    setTimeout(() => {
      const filtered = apps.filter((app) => app.name.toLowerCase().includes(value));
      setFilteredApps(filtered);
      setLoading(false);
    }, 500);
  }

  return (
    <div className="my-12 px-4 md:px-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800">Our All Applications</h2>
      <p className="text-center mb-8 text-[#627382]">Explore All Apps on the Market developed by us. We code for Millions</p>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2>({filteredApps.length}) Apps Found</h2>
        </div>
        <div>
          <label className="input flex items-center border rounded-md px-3 py-1">
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
            <input onChange={handleSearch} className="outline-none w-full" value={search} type="search" placeholder="Search Apps" />
          </label>
        </div>
      </div>
      {loading ? (
        <p className="text-center text-gray-500 text-lg mt-10">Loading......</p>
      ) : filteredApps.length === 0 ? (
        <div>
          <p className="text-center text-gray-500 text-6xl mt-10">No Apps Found</p>
          <div className="flex justify-center">
            <Link
              to="/"
              className='mt-5 mb-5 inline-block px-8 py-3 rounded-xl text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold transition hover:opacity-90'
            >
              Go Back!
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <Link to={`/apps/${app.id}`}
              key={app.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={app.image}
                alt={app.name}
                className="w-35 h-35 mx-auto object-cover rounded-t-2xl"
              />
              <h3 className="font-semibold text-lg text-gray-800 mb-2 mt-3 text-center">
                {app.name}
              </h3>

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
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApps;