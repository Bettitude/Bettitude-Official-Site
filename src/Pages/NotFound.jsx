import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B0F19] text-white text-center px-6">
      <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#FFC527]">
        404
      </h1>

      <p className="mt-4 text-2xl text-gray-300">Oops! This page doesn't exist.</p>

      <Link
        to="/"
        className="mt-8 inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#FFC527] text-[#0B0F19] font-bold hover:scale-105 transition-all"
      >
        <FiArrowLeft className="text-lg" />
        <span>Go Back Home</span>
      </Link>
    </div>
  );
}
