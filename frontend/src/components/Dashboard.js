import React, { useState } from 'react';

export default function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isProjectsOpen, setIsProjectsOpen] = useState(true);
  const [isTasksOpen, setIsTasksOpen] = useState(true);
  const [isNotifOpen, setIsNotifOpen] = useState(false); // Added this state for notification toggle
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New message from John", read: false },
    { id: 2, text: "Server backup completed", read: false },
    { id: 3, text: "Project deadline tomorrow", read: false },
  ]);

  const projects = [
    { id: 1, name: 'Subtle Boar', date: '21/03/22', views: '10 users', color: 'purple' },
    { id: 2, name: 'RD Sales', date: '21/03/22', views: '200 users', color: 'purple' },
    { id: 3, name: 'Upgrade Manager', date: '21/03/22', views: '0 users', color: 'blue' },
  ];

  return (
    <div className={`min-h-screen ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white' 
        : 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 text-gray-900'
    }`}>
      {/* Header Navigation */}
      <header className={`border rounded-xl mx-6 mt-6 backdrop-blur-sm shadow-lg ${
        isDarkMode 
          ? "border-gray-700/50" 
          : "border-white/80 shadow-white/50"
      }`} style={{ 
        backgroundColor: isDarkMode ? 'rgba(26,26,46,0.8)' : 'rgba(255,255,255,0.95)' 
      }}>
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-md"></div>
            <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Company</h1>
          </div>

          {/* Right Controls: Notifications + Theme */}
          <div className="flex items-center space-x-4 relative">
            {/* Notification Button */}
            <div className="relative">
              <button 
                onClick={() => setIsNotifOpen(!isNotifOpen)}
                className="relative px-3 py-2 bg-blue-600 rounded-lg text-white shadow-md hover:bg-blue-700 transition-colors"
              >
                🔔
                {notifications.some(n => !n.read) && (
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>

              {/* Notification Dropdown */}
              {isNotifOpen && (
                <div className={`absolute right-0 mt-2 w-64 rounded-lg shadow-xl border p-4 z-20 ${
                  isDarkMode 
                    ? "bg-gray-800 border-gray-700/50" 
                    : "bg-white border-gray-200 shadow-lg"
                }`}>
                  {notifications.map((notif) => (
                    <div key={notif.id} className="flex items-center justify-between mb-2">
                      <span className={`${
                        isDarkMode 
                          ? `text-white ${notif.read ? "line-through text-gray-400" : ""}`
                          : `text-gray-800 ${notif.read ? "line-through text-gray-400" : ""}`
                      }`}>
                        {notif.text}
                      </span>
                      <input
                        type="checkbox"
                        checked={notif.read}
                        onChange={() => {
                          setNotifications(notifications.map(n =>
                            n.id === notif.id ? { ...n, read: !n.read } : n
                          ));
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <div className="flex space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setIsDarkMode(false)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  !isDarkMode
                    ? "bg-yellow-500 text-white shadow-md transform scale-105"
                    : "text-gray-500 hover:text-yellow-500 hover:bg-yellow-50"
                }`}
              >
                ☀️
              </button>
              <button
                onClick={() => setIsDarkMode(true)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isDarkMode
                    ? "bg-purple-600 text-white shadow-md transform scale-105"
                    : "text-gray-500 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                🌙
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 p-6">
          <div className="space-y-2">
            {/* Projects Collapsible */}
            <button
              onClick={() => setIsProjectsOpen(!isProjectsOpen)}
              className={`w-full text-left px-4 py-3 rounded-lg mt-4 flex justify-between items-center transition-all duration-200 ${
                isDarkMode
                  ? "text-white bg-purple-600/20 border border-purple-500/30 hover:bg-purple-600/30"
                  : "text-gray-800 bg-purple-100 border border-purple-200 hover:bg-purple-200 shadow-sm"
              }`}
            >
              Projects
              <span className={`font-bold ${isDarkMode ? "text-purple-300" : "text-purple-600"}`}>
                {isProjectsOpen ? '−' : '+'}
              </span>
            </button>
            {isProjectsOpen && (
              <div className="pl-4 mt-2 space-y-1">
                {projects.map(p => (
                  <p key={p.id} className={`cursor-pointer transition-colors ${
                    isDarkMode 
                      ? "text-gray-300 hover:text-white" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded px-2 py-1"
                  }`}>{p.name}</p>
                ))}
              </div>
            )}

            {/* My Tasks Collapsible */}
            <button
              onClick={() => setIsTasksOpen(!isTasksOpen)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex justify-between items-center ${
                isDarkMode
                  ? "text-gray-300 hover:text-white hover:bg-white/5"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              My Tasks
              <span className={`font-bold ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                {isTasksOpen ? '−' : '+'}
              </span>
            </button>
            {isTasksOpen && (
              <div className="pl-4 mt-2 space-y-1">
                <p className={`cursor-pointer transition-colors ${
                  isDarkMode 
                    ? "text-gray-300 hover:text-white" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded px-2 py-1"
                }`}>Task 1</p>
                <p className={`cursor-pointer transition-colors ${
                  isDarkMode 
                    ? "text-gray-300 hover:text-white" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded px-2 py-1"
                }`}>Task 2</p>
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Projects Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <span className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>→</span>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Projects</h2>
            </div>
            <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 text-white shadow-md hover:shadow-lg transform hover:scale-105">
              + New Project
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {projects.map((project, index) => (
              <div key={project.id} className="relative group">
                {/* Project Card */}
                <div 
                  className={`border rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer ${
                    isDarkMode
                      ? "border-gray-700/50 hover:shadow-lg hover:bg-gray-800/70"
                      : "border-gray-200 shadow-md hover:shadow-xl bg-white/90 hover:bg-white"
                  }`}
                  style={{ 
                    backgroundColor: isDarkMode ? 'rgba(26,26,46,0.8)' : undefined 
                  }}
                >
                  {/* Project Header */}
                  <div className={`p-4 border-b ${
                    isDarkMode ? 'border-gray-700/50' : 'border-gray-200'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className={`font-semibold text-lg ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                      }`}>
                        {project.name}
                      </div>
                      <div className={`w-3 h-3 rounded-full ${
                        project.color === 'purple' 
                          ? 'bg-purple-500' 
                          : 'bg-blue-500'
                      }`}></div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>Views:</span>
                      <span className={`text-sm font-semibold ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                      }`}>{project.views}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>Date:</span>
                      <span className={`text-sm font-semibold ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                      }`}>{project.date}</span>
                    </div>
                    
                    {/* Progress bar for visual appeal */}
                    <div className="mt-3 pt-2">
                      <div className={`w-full h-2 rounded-full ${
                        isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                        <div 
                          className={`h-2 rounded-full ${
                            project.color === 'purple' 
                              ? 'bg-purple-500' 
                              : 'bg-blue-500'
                          }`}
                          style={{ 
                            width: `${Math.floor(Math.random() * 80) + 20}%` 
                          }}
                        ></div>
                      </div>
                      <p className={`text-xs mt-1 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>Progress</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}