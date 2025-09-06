import React, { useState } from "react";

export default function ProjectDetails() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isProjectsOpen, setIsProjectsOpen] = useState(true);
  const [isTasksOpen, setIsTasksOpen] = useState(true);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);

  const [notifications, setNotifications] = useState([
    { id: 1, text: "New bug reported in Stripe Integration", read: false },
    { id: 2, text: "Feedback added on Sales App task", read: false },
    { id: 3, text: "Reminder: Project deadline tomorrow", read: false },
  ]);

  const tasks = [
    {
      id: 1,
      title: "Optimise Website Controllers",
      labels: ["Feedback", "Refactor"],
      date: "21/03/22",
      assignedTo: ["Awesome Butterfly", "Crafty Jaguar"],
      views: 14,
    },
    {
      id: 2,
      title: "Remove Sales App 🗑️",
      labels: ["Feedback", "Delete"],
      date: "21/03/22",
      assignedTo: ["Crafty Jaguar"],
      views: 23,
    },
    {
      id: 3,
      title: "Stripe Integration",
      labels: ["Improvement", "Payment Provider"],
      date: "21/03/22",
      assignedTo: ["Aranya Bandhu"],
      views: 31,
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
          isDarkMode ? "border-gray-700/50" : "border-white/80 shadow-white/50"
        }`}
        style={{
          backgroundColor: isDarkMode
            ? "rgba(26,26,46,0.8)"
            : "rgba(255,255,255,0.95)",
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

          {/* Search */}
          <input
            type="text"
            placeholder="Search......."
            className={`px-4 py-2 rounded-lg w-96 focus:outline-none ${
              isDarkMode
                ? "bg-gray-700 text-white placeholder-gray-400"
                : "bg-gray-200 text-gray-900 placeholder-gray-600"
            }`}
          />

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
                <div
                  className={`absolute right-0 mt-2 w-64 rounded-lg shadow-xl border p-4 z-20 ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700/50"
                      : "bg-white border-gray-200 shadow-lg"
                  }`}
                >
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className="flex items-center justify-between mb-2"
                    >
                      <span
                        className={`${
                          isDarkMode
                            ? `text-white ${
                                notif.read ? "line-through text-gray-400" : ""
                              }`
                            : `text-gray-800 ${
                                notif.read ? "line-through text-gray-400" : ""
                              }`
                        }`}
                      >
                        {notif.text}
                      </span>
                      <input
                        type="checkbox"
                        checked={notif.read}
                        onChange={() =>
                          setNotifications(
                            notifications.map((n) =>
                              n.id === notif.id
                                ? { ...n, read: !n.read }
                                : n
                            )
                          )
                        }
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

      {/* Body */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 p-6">
          <div className="space-y-2">
            {/* Projects */}
            <button
              onClick={() => setIsProjectsOpen(!isProjectsOpen)}
              className={`w-full text-left px-4 py-3 rounded-lg mt-4 flex justify-between items-center transition-all duration-200 ${
                isDarkMode
                  ? "text-white bg-purple-600/20 border border-purple-500/30 hover:bg-purple-600/30"
                  : "text-gray-800 bg-purple-100 border border-purple-200 hover:bg-purple-200 shadow-sm"
              }`}
            >
              Projects
              <span
                className={`font-bold ${
                  isProjectsOpen ? "text-purple-300" : "text-purple-600"
                }`}
              >
                {isProjectsOpen ? "−" : "+"}
              </span>
            </button>
            {isProjectsOpen && (
              <div className="pl-4 mt-2 space-y-1">
                <p className="cursor-pointer">RD Sales</p>
                <p className="cursor-pointer">Subtle Boar</p>
              </div>
            )}

            {/* My Tasks */}
            <button
              onClick={() => setIsTasksOpen(!isTasksOpen)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex justify-between items-center ${
                isDarkMode
                  ? "text-gray-300 hover:text-white hover:bg-white/5"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              My Tasks
              <span>{isTasksOpen ? "−" : "+"}</span>
            </button>
            {isTasksOpen && (
              <div className="pl-4 mt-2 space-y-1">
                <p className="cursor-pointer">Task 1</p>
                <p className="cursor-pointer">Task 2</p>
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {!showNewTaskForm ? (
            <>
              {/* Header Row */}
              <div className="flex items-center justify-between mb-8">
                <h2
                  className={`text-2xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  ➤ Projects ➤ RD Sales
                </h2>
                <button
                  onClick={() => setShowNewTaskForm(true)}
                  className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 text-white shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  + New Task
                </button>
              </div>

              {/* Tasks Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-800/80 border border-gray-700"
                        : "bg-white border border-gray-200"
                    }`}
                  >
                    {/* Labels */}
                    <div className="flex space-x-2 mb-2">
                      {task.labels.map((label, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-purple-600 text-white"
                        >
                          {label}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold mb-3">{task.title}</h3>

                    {/* Assigned To */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {task.assignedTo.map((user, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-600 text-white text-xs rounded-lg"
                        >
                          {user}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>{task.date}</span>
                      <span>👁 {task.views} views</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* New Task Form */}
              <div className="flex items-center justify-between mb-8">
                <h2
                  className={`text-2xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  New Task
                </h2>
                <div className="space-x-2">
                  <button
                    onClick={() => setShowNewTaskForm(false)}
                    className="px-4 py-2 bg-gray-500 rounded-lg hover:bg-gray-600 text-white shadow-md"
                  >
                    Discard
                  </button>
                  <button className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 text-white shadow-md">
                    Save
                  </button>
                </div>
              </div>

              <form className="space-y-6 max-w-2xl">
                <div>
                  <label className="block mb-1 font-semibold">Title</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border bg-transparent"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold">Labels</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border bg-transparent"
                    placeholder="Bug, Urgent, Feature..."
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold">Assign To</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border bg-transparent"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold">Deadline</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 rounded-lg border bg-transparent"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold">Priority</label>
                  <div className="space-x-4">
                    <label>
                      <input type="radio" name="priority" /> Low
                    </label>
                    <label>
                      <input type="radio" name="priority" /> Medium
                    </label>
                    <label>
                      <input type="radio" name="priority" /> High
                    </label>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block mb-1 font-semibold">Description</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg border bg-transparent"
                    placeholder="Enter task details..."
                  ></textarea>
                </div>
              </form>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
