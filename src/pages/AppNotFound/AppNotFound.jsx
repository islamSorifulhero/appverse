import React from "react";
import { useNavigate } from "react-router";
import AppNot from "../../assets/App-Error.png"

const AppNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
        <img className="w-65 h-65 mb-6" src={AppNot} alt="" />
      <h1 className="text-5xl font-bold text-gray-800">OPPS!! APP NOT FOUND</h1>
      <p className="text-xl text-gray-600 mb-6">The App you are requesting is not found on our system.  please try another apps</p>
      <button
        onClick={() => navigate("/", { replace: true })}
        className="mb-5 inline-block px-8 py-3 rounded-xl text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold transition hover:opacity-90"
      >
        Go to Home
      </button>
    </div>
  );
};

export default AppNotFound;