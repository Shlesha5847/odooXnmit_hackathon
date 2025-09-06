import React, { useState } from 'react';

export default function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isProjectsOpen, setIsProjectsOpen] = useState(true);
  const [isTasksOpen, setIsTasksOpen] = useState(true);
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
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gray-100'}`}>
      {/* Header Navigation */}
      <header className="border border-gray-700/50 rounded-xl mx-6 mt-6 backdrop-blur-sm" style={{ backgroundColor: isDarkMode ? 'rgba(26,26,46,0.8)' : '#fff' }}>
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg"></div>
            <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Company</h1>
          </div>

          {/* Right Controls: Notifications + Theme */}
          <div className="flex items-center space-x-4 relative">
            {/* Notification Button */}
            <div className="relative">
              <button className="relative px-3 py-2 bg-blue-600 rounded-lg text-white">
                🔔
                {notifications.some(n => !n.read) && (
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>

              {/* Notification Dropdown */}
              <div className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-lg border border-gray-700/50 p-4 z-20">
                {notifications.map((notif) => (
                  <div key={notif.id} className="flex items-center justify-between mb-2">
                    <span className={`text-white ${notif.read ? "line-through text-gray-400" : ""}`}>
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
            </div>

            {/* Theme Toggle */}
            <div className="flex space-x-1">
              <button
                onClick={() => setIsDarkMode(false)}
                className={`p-2 rounded-lg transition-colors ${!isDarkMode ? 'bg-yellow-500 text-white' : 'text-gray-400 hover:text-black'}`}
              >
                ☀️
              </button>
              <button
                onClick={() => setIsDarkMode(true)}
                className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-black'}`}
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
              className="w-full text-left px-4 py-3 text-white bg-purple-600/20 rounded-lg border border-purple-500/30 mt-4 flex justify-between items-center"
            >
              Projects
              <span>{isProjectsOpen ? '−' : '+'}</span>
            </button>
            {isProjectsOpen && (
              <div className="pl-4 mt-2 space-y-1">
                {projects.map(p => (
                  <p key={p.id} className="text-gray-300 hover:text-white cursor-pointer">{p.name}</p>
                ))}
              </div>
            )}

            {/* My Tasks Collapsible */}
            <button
              onClick={() => setIsTasksOpen(!isTasksOpen)}
              className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex justify-between items-center"
            >
              My Tasks
              <span>{isTasksOpen ? '−' : '+'}</span>
            </button>
            {isTasksOpen && (
              <div className="pl-4 mt-2 space-y-1">
                <p className="text-gray-300 hover:text-white cursor-pointer">Task 1</p>
                <p className="text-gray-300 hover:text-white cursor-pointer">Task 2</p>
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Projects Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-lg">→</span>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Projects</h2>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {projects.map((project, index) => (
              <div key={project.id} className="relative">
                {/* Project Card */}
                <div className="border border-gray-700/50 rounded-2xl overflow-hidden backdrop-blur-sm" style={{ backgroundColor: isDarkMode ? 'rgba(26,26,46,0.8)' : '#fff' }}>
                  {/* Project Header */}
                  <div className="p-4 border-b border-gray-700/50">
                    <div className="text-white">{project.name}</div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4">
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>Views: {project.views}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>Date: {project.date}</p>
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
