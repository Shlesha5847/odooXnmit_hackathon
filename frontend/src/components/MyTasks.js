import React, { useState } from "react";

export default function MyTasks() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isProjectsOpen, setIsProjectsOpen] = useState(true);
  const [isTasksOpen, setIsTasksOpen] = useState(true);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Deadline approaching!", read: false },
    { id: 2, text: "New comment on Task 2", read: false },
  ]);

  const tasks = [
    {
      id: 1,
      title: "Prepare Presentation",
      labels: ["High Priority", "Work"],
      date: "22/03/22",
      assignedTo: ["Innocent Penguin", "Powerful Baboon"],
    },
    {
      id: 2,
      title: "Fix Dashboard Bugs",
      labels: ["Bug", "Urgent"],
      date: "23/03/22",
      assignedTo: ["Crafty Jaguar"],
    },
    {
      id: 3,
      title: "Design Mockups",
      labels: ["UI/UX", "Feedback"],
      date: "25/03/22",
      assignedTo: ["Cool Salamander"],
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <header
        className={`border rounded-xl mx-6 mt-6 backdrop-blur-sm shadow-lg ${
          isDarkMode 
            ? "border-gray-700/50" 
            : "border-white/80 shadow-white/50"
        }`}
        style={{
          backgroundColor: isDarkMode ? "rgba(26,26,46,0.8)" : "rgba(255,255,255,0.95)",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-md"></div>
            <h1
              className={`text-xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Company
            </h1>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-4 relative">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsNotifOpen(!isNotifOpen)}
                className="relative px-3 py-2 bg-blue-600 rounded-lg text-white shadow-md hover:bg-blue-700 transition-colors"
              >
                🔔
                {notifications.some((n) => !n.read) && (
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>

              {isNotifOpen && (
                <div className={`absolute right-0 mt-2 w-64 rounded-lg shadow-xl border p-4 z-20 ${
                  isDarkMode 
                    ? "bg-gray-800 border-gray-700/50" 
                    : "bg-white border-gray-200 shadow-lg"
                }`}>
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className="flex items-center justify-between mb-2"
                    >
                      <span
                        className={`${
                          isDarkMode 
                            ? `text-white ${notif.read ? "line-through text-gray-400" : ""}`
                            : `text-gray-800 ${notif.read ? "line-through text-gray-400" : ""}`
                        }`}
                      >
                        {notif.text}
                      </span>
                      <input
                        type="checkbox"
                        checked={notif.read}
                        onChange={() => {
                          setNotifications(
                            notifications.map((n) =>
                              n.id === notif.id ? { ...n, read: !n.read } : n
                            )
                          );
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
                {isProjectsOpen ? "−" : "+"}
              </span>
            </button>
            {isProjectsOpen && (
              <div className="pl-4 mt-2 space-y-1">
                <p className={`cursor-pointer transition-colors ${
                  isDarkMode 
                    ? "text-gray-300 hover:text-white" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded px-2 py-1"
                }`}>
                  RD Sales
                </p>
                <p className={`cursor-pointer transition-colors ${
                  isDarkMode 
                    ? "text-gray-300 hover:text-white" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded px-2 py-1"
                }`}>
                  Subtle Boar
                </p>
              </div>
            )}

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
                {isTasksOpen ? "−" : "+"}
              </span>
            </button>
            {isTasksOpen && (
              <div className="pl-4 mt-2 space-y-1">
                <p className={`cursor-pointer transition-colors ${
                  isDarkMode 
                    ? "text-gray-300 hover:text-white" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded px-2 py-1"
                }`}>
                  Task 1
                </p>
                <p className={`cursor-pointer transition-colors ${
                  isDarkMode 
                    ? "text-gray-300 hover:text-white" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded px-2 py-1"
                }`}>
                  Task 2
                </p>
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <span className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>→</span>
              <h2
                className={`text-2xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                My Tasks
              </h2>
            </div>
            <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 text-white shadow-md hover:shadow-lg transform hover:scale-105">
              + New Task
            </button>
          </div>

          {/* Task Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`border rounded-2xl p-4 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer ${
                  isDarkMode
                    ? "border-gray-700/50 bg-gray-800/50 hover:shadow-lg hover:bg-gray-800/70"
                    : "border-gray-200 bg-white/90 shadow-md hover:shadow-xl hover:bg-white"
                }`}
              >
                <div className="flex space-x-2 mb-3">
                  {task.labels.map((label, index) => (
                    <span
                      key={index}
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        isDarkMode
                          ? "bg-purple-600/70 text-white"
                          : label === "High Priority" || label === "Urgent"
                            ? "bg-red-100 text-red-700 border border-red-200"
                            : label === "Bug"
                            ? "bg-orange-100 text-orange-700 border border-orange-200"
                            : "bg-blue-100 text-blue-700 border border-blue-200"
                      }`}
                    >
                      {label}
                    </span>
                  ))}
                </div>

                <h3 className={`font-semibold mb-3 text-lg ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}>
                  {task.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-3">
                  {task.assignedTo.map((user, idx) => (
                    <div
                      key={idx}
                      className={`px-3 py-1 rounded-lg text-xs font-medium ${
                        isDarkMode
                          ? "bg-blue-600 text-white"
                          : "bg-blue-600 text-white shadow-sm"
                      }`}
                    >
                      {user}
                    </div>
                  ))}
                </div>

                <div className={`flex justify-between text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                  <span className="font-medium">{task.date}</span>
                  <span className="flex items-center space-x-1">
                    <span>👁</span>
                    <span>{Math.floor(Math.random() * 50)} views</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}