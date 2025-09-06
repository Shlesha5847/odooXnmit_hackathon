// src/SignUpPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup submitted:", formData);
  };

  return (
    <div
      className="min-h-screen bg-gray-900"
      style={{
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f1419 100%)",
      }}
    >
      {/* Header Navigation */}
      <header
        className="border border-gray-700/50 rounded-xl mx-6 mt-6 backdrop-blur-sm"
        style={{ backgroundColor: "rgba(26, 26, 46, 0.8)" }}
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white tracking-wide">
            ENGINE ARCADE
          </h1>
          <nav className="flex items-center space-x-4">
            <button className="px-5 py-2.5 text-gray-300 hover:text-white rounded-lg transition-all duration-200 hover:bg-white/5">
              Home
            </button>
            <button
              className="px-5 py-2.5 text-white rounded-lg transition-all duration-200"
              style={{ backgroundColor: "rgba(139, 92, 246, 0.2)" }}
            >
              Solutions
            </button>
            <button className="px-5 py-2.5 text-gray-300 hover:text-white rounded-lg transition-all duration-200 hover:bg-white/5">
              Work
            </button>
            <button className="px-5 py-2.5 text-gray-300 hover:text-white rounded-lg transition-all duration-200 hover:bg-white/5">
              About
            </button>
            <div className="flex items-center space-x-3 ml-8">
              <Link
                to="/login"
                className="px-5 py-2.5 border border-gray-600/50 text-gray-300 hover:text-white hover:border-gray-500 rounded-lg transition-all duration-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-5 py-2.5 border border-gray-600/50 text-white rounded-lg transition-all duration-200"
                style={{ backgroundColor: "rgba(139, 92, 246, 0.2)" }}
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-6">
        {/* Hero Section */}
        <div className="text-center mb-12 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Join </span>
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Engine Arcade
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Create your account to start building and sharing amazing projects.
          </p>
        </div>

        {/* Signup Form */}
        <div className="w-full max-w-md">
          <div
            className="border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm shadow-2xl"
            style={{ backgroundColor: "rgba(26, 26, 46, 0.8)" }}
          >
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">
                Create Account
              </h2>
              <Link
                to="/login"
                className="text-purple-400 hover:text-purple-300 text-sm transition-colors duration-200"
              >
                Already have an account? Login instead
              </Link>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3.5 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3.5 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3.5 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Re-enter your password"
                  className="w-full px-4 py-3.5 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
              >
                Sign Up →
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700/50 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div
              className="border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm"
              style={{ backgroundColor: "rgba(26, 26, 46, 0.6)" }}
            >
              <h3 className="text-white font-bold text-lg mb-2">ENGINE ARCADE</h3>
              <p className="text-gray-400 text-sm">
                Building the future of game creation.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <div className="h-px bg-gradient-to-r from-purple-600/50 to-transparent"></div>
                <div className="h-px bg-gradient-to-r from-blue-600/50 to-transparent"></div>
                <div className="h-px bg-gradient-to-r from-purple-600/50 to-transparent"></div>
                <div className="h-px bg-gradient-to-r from-blue-600/50 to-transparent"></div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <div className="space-y-2">
                <div className="h-px bg-gradient-to-r from-purple-600/50 to-transparent"></div>
                <div className="h-px bg-gradient-to-r from-blue-600/50 to-transparent w-3/4"></div>
                <div className="h-px bg-gradient-to-r from-purple-600/50 to-transparent"></div>
                <div className="h-px bg-gradient-to-r from-blue-600/50 to-transparent w-2/3"></div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect with us</h3>
              <div className="space-y-2">
                <div className="h-px bg-gradient-to-r from-purple-600/50 to-transparent"></div>
                <div className="h-px bg-gradient-to-r from-blue-600/50 to-transparent"></div>
                <div className="h-px bg-gradient-to-r from-purple-600/50 to-transparent w-3/4"></div>
                <div className="h-px bg-gradient-to-r from-blue-600/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
