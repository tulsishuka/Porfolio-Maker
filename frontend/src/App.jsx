import Home from "./pages/Home.jsx";
import React from "react";
import Profiles from "./pages/Profiles.jsx";
import { Routes, Route, Link } from "react-router-dom";
import PortfolioPage from "./pages/Portfoliopage.jsx";
export default function App(){  
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold ">Pro-Builder</Link>
          <nav className="space-x-4">
            <Link to="/" className="text-white hover:text-gray-900 bg-blue-400 py-2 px-4 rounded-md ">Home</Link>
            <Link to="/profiles" className="text-white hover:text-gray-900 bg-red-900 py-2 px-4 rounded-md">Profile</Link></nav>
        </div>
      </header>
      <main className="container py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/portfolio/:id" element={<PortfolioPage />} />
        </Routes>
      </main>
    </div>
  );
}
