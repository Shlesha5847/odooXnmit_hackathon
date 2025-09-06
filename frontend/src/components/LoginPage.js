import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Navigation */}
      <header className="border-2 border-gray-600 rounded-lg mx-4 mt-4">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-medium text-gray-300">Title of the Project</h1>
          <nav className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-gray-500 text-gray-300 hover:text-white rounded transition-colors">
              Home
            </button>
            <button className="px-4 py-2 border border-gray-500 bg-gray-700 text-white rounded">
              Solutions
            </button>
            <button className="px-4 py-2 border border-gray-500 text-gray-300 hover:text-white rounded transition-colors">
              Work
            </button>
            <button className="px-4 py-2 border border-gray-500 text-gray-300 hover:text-white rounded transition-colors">
              About
            </button>
             <button className="px-4 py-2 border border-gray-500 text-gray-300 hover:text-white rounded transition-colors">
              Login
            </button>
             {/* <button className="px-4 py-2 border border-gray-500 text-gray-300 hover:text-white rounded transition-colors">
              SignUp
            </button> */}
            <div className="mb-6">
              {/* <h2 className="text-2xl font-semibold text-gray-800 mb-2">Login into account</h2> */}
              <Link to="/signup" className="text-sm text-gray-600 hover:text-gray-800 underline">
                <button className="px-4 py-2 border border-gray-500 text-gray-300 hover:text-white rounded transition-colors">
              SignUp
            </button>
               </Link>
            </div>
          
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md relative">
          {/* Decorative elements */}
          {/* <div className="absolute -top-6 -right-4 z-10">
       

          {/* Login Form */}
          <div className="bg-gray-100 rounded-lg p-8 text-gray-900">
            <div className="mb-6">
              {/* <h2 className="text-2xl font-semibold text-gray-800 mb-2">Login into account</h2> */}
              <button className="text-sm text-gray-600 hover:text-gray-800 underline">
                signup instead
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50"
                />
              </div>

              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50"
                />
              </div>

              <div className="text-left">
                <button className="text-sm text-orange-500 hover:text-orange-600 underline">
                  Forgot password?
                </button>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gray-400 hover:bg-gray-500 text-white font-medium py-4 px-4 rounded-full transition-colors text-lg"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-2 border-gray-600 rounded-lg mx-4 mb-4">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo/Description */}
            <div className="border-2 border-gray-600 rounded-lg p-6 h-32"></div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-medium mb-4">Quick Links</h3>
              <div className="space-y-3">
                <div className="h-px bg-gray-600"></div>
                <div className="h-px bg-gray-600"></div>
                <div className="h-px bg-gray-600"></div>
                <div className="h-px bg-gray-600"></div>
              </div>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="text-white font-medium mb-4">Company</h3>
              <div className="space-y-3">
                <div className="h-px bg-gray-600"></div>
                <div className="h-px bg-gray-600 w-3/4"></div>
                <div className="h-px bg-gray-600"></div>
                <div className="h-px bg-gray-600 w-2/3"></div>
              </div>
            </div>
            
            {/* Connect with us */}
            <div>
              <h3 className="text-white font-medium mb-4">Connect with us</h3>
              <div className="space-y-3">
                <div className="h-px bg-gray-600"></div>
                <div className="h-px bg-gray-600"></div>
                <div className="h-px bg-gray-600 w-3/4"></div>
                <div className="h-px bg-gray-600"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}