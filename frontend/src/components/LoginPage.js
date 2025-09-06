import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch("http://localhost:5000/login", {   // change URL to your backend route
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
        credentials: "include"   // if you're using cookies/JWT
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      console.log("Login success:", data);

      // Example: Save token if backend sends one
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f1419 100%)' }}>
      {/* Header Navigation */}
      <header className="border border-gray-700/50 rounded-xl mx-6 mt-6 backdrop-blur-sm" style={{ backgroundColor: 'rgba(26, 26, 46, 0.8)' }}>
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white tracking-wide">ENGINE ARCADE</h1>
          <nav className="flex items-center space-x-4">
            <button className="px-5 py-2.5 text-gray-300 hover:text-white rounded-lg transition-all duration-200 hover:bg-white/5">
              Home
            </button>
            <button className="px-5 py-2.5 text-white rounded-lg transition-all duration-200" style={{ backgroundColor: 'rgba(139, 92, 246, 0.2)' }}>
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
              className="px-5 py-2.5 border border-gray-600/50 text-gray-300 hover:text-white hover:border-gray-500 rounded-lg transition-all duration-200"
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
            <span className="text-white">Welcome Back to </span>
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Your Account
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Sign in to access your dashboard and continue building amazing projects.
          </p>
        </div>

        {/* Login Form */}
        <div className="w-full max-w-md">
          <div className="border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm shadow-2xl" style={{ backgroundColor: 'rgba(26, 26, 46, 0.8)' }}>
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Login to Account</h2>
              {/* <button className="text-purple-400 hover:text-purple-300 text-sm transition-colors duration-200">
                Don't have an account? Sign up instead
              </button> */}
              <Link 
               to="/signup" 
              className="text-purple-400 hover:text-purple-300 text-sm transition-colors duration-200"
               >
               Don't have an account? Sign up instead
               </Link>

            </div>

            <div className="space-y-6">
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

              <div className="text-left">
                <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors duration-200">
                  Forgot your password?
                </button>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
              >
                Sign In →
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl w-full">
          <div className="border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm text-center" style={{ backgroundColor: 'rgba(26, 26, 46, 0.6)' }}>
            <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-400 text-2xl">💬</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Chat to Create</h3>
            <p className="text-gray-400 text-sm">
              Simply describe your game idea in natural language and watch it come to life.
            </p>
          </div>

          <div className="border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm text-center" style={{ backgroundColor: 'rgba(26, 26, 46, 0.6)' }}>
            <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-400 text-2xl">⚡</span>
            </div>
            <h3 className="text-white font-semibold mb-2">No Coding Required</h3>
            <p className="text-gray-400 text-sm">
              Create complex games without writing a single line of code.
            </p>
          </div>

          <div className="border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm text-center" style={{ backgroundColor: 'rgba(26, 26, 46, 0.6)' }}>
            <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-green-400 text-2xl">🎮</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Instantly Playable</h3>
            <p className="text-gray-400 text-sm">
              Get a working game in seconds that you can play and share immediately.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700/50 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo/Description */}
            <div className="border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm" style={{ backgroundColor: 'rgba(26, 26, 46, 0.6)' }}>
              <h3 className="text-white font-bold text-lg mb-2">ENGINE ARCADE</h3>
              <p className="text-gray-400 text-sm">Building the future of game creation.</p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <div className="h-px bg-gradient-to-r from-purple-600/50 to-transparent"></div>
                <div className="h-px bg-gradient-to-r from-blue-600/50 to-transparent"></div>
                <div className="h-px bg-gradient-to-r from-purple-600/50 to-transparent"></div>
                <div className="h-px bg-gradient-to-r from-blue-600/50 to-transparent"></div>
              </div>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <div className="space-y-2">
                <div className="h-px bg-gradient-to-r from-purple-600/50 to-transparent"></div>
                <div className="h-px bg-gradient-to-r from-blue-600/50 to-transparent w-3/4"></div>
                <div className="h-px bg-gradient-to-r from-purple-600/50 to-transparent"></div>
                <div className="h-px bg-gradient-to-r from-blue-600/50 to-transparent w-2/3"></div>
              </div>
            </div>
            
            {/* Connect with us */}
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