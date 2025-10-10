import React from "react";
import { useNavigate } from "react-router";

const AppNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">App Not Found</p>
      <button
        onClick={() => navigate("/", { replace: true })}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition"
      >
        Go to Home
      </button>
    </div>
  );
};

export default AppNotFound;
