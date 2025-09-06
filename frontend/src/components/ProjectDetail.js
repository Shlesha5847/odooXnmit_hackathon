import React, { useState } from "react";

export default function ProjectDetail() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isProjectsOpen, setIsProjectsOpen] = useState(true);
  const [isTasksOpen, setIsTasksOpen] = useState(true);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Task assigned to you", read: false },
    { id: 2, text: "Project updated", read: false },
  ]);

  const [newTask, setNewTask] = useState({
    name: "",
    assignee: "",
    project: "RD Sales",
    tags: "",
    deadline: "",
    description: "",
  });

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Optimise Website Controllers",
      labels: ["Feedback", "Refactor"],
      date: "21/03/22",
      assignedTo: ["Brilliant Cat", "Crafty Jaguar"],
    },
    {
      id: 2,
      title: "Remove Sales App",
      labels: ["Feedback", "Delete"],
      date: "21/03/22",
      assignedTo: ["Cool Salamander", "Echidna"],
    },
    {
      id: 3,
      title: "Stripe Integration",
      labels: ["Improvement", "Payment Provider"],
      date: "21/03/22",
      assignedTo: ["Echidna"],
    },
  ]);

  const handleInputChange = (field, value) => {
    setNewTask(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveTask = () => {
    if (newTask.name.trim()) {
      const task = {
        id: tasks.length + 1,
        title: newTask.name,
        labels: newTask.tags ? newTask.tags.split(',').map(tag => tag.trim()) : [],
        date: newTask.deadline || new Date().toLocaleDateString('en-GB'),
        assignedTo: newTask.assignee ? [newTask.assignee] : [],
      };
      
      setTasks(prev => [...prev, task]);
      setNewTask({
        name: "",
        assignee: "",
        project: "RD Sales",
        tags: "",
        deadline: "",
        description: "",
      });
      setIsNewTaskOpen(false);
    }
  };

  const handleDiscardTask = () => {
    setNewTask({
      name: "",
      assignee: "",
      project: "RD Sales",
      tags: "",
      deadline: "",
      description: "",
    });
    setIsNewTaskOpen(false);
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Header Navigation */}
      <header
        className="border border-gray-700/50 rounded-xl mx-6 mt-6 backdrop-blur-sm"
        style={{
          backgroundColor: isDarkMode ? "rgba(26,26,46,0.8)" : "#fff",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg"></div>
            <h1
              className={`text-xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Project: RD Sales
            </h1>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-4 relative">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsNotifOpen(!isNotifOpen)}
                className="relative px-3 py-2 bg-blue-600 rounded-lg text-white"
              >
                🔔
                {notifications.some((n) => !n.read) && (
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>

              {isNotifOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-lg border border-gray-700/50 p-4 z-20">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className="flex items-center justify-between mb-2"
                    >
                      <span
                        className={`text-white ${
                          notif.read ? "line-through text-gray-400" : ""
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
            <div className="flex space-x-1">
              <button
                onClick={() => setIsDarkMode(false)}
                className={`p-2 rounded-lg transition-colors ${
                  !isDarkMode
                    ? "bg-yellow-500 text-white"
                    : "text-gray-400 hover:text-black"
                }`}
              >
                ☀️
              </button>
              <button
                onClick={() => setIsDarkMode(true)}
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode
                    ? "bg-purple-600 text-white"
                    : "text-gray-400 hover:text-black"
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
              className="w-full text-left px-4 py-3 text-white bg-purple-600/20 rounded-lg border border-purple-500/30 mt-4 flex justify-between items-center"
            >
              Projects
              <span>{isProjectsOpen ? "−" : "+"}</span>
            </button>
            {isProjectsOpen && (
              <div className="pl-4 mt-2 space-y-1">
                <p className="text-gray-300 hover:text-white cursor-pointer">
                  RD Sales
                </p>
                <p className="text-gray-300 hover:text-white cursor-pointer">
                  Subtle Boar
                </p>
              </div>
            )}

            <button
              onClick={() => setIsTasksOpen(!isTasksOpen)}
              className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex justify-between items-center"
            >
              My Tasks
              <span>{isTasksOpen ? "−" : "+"}</span>
            </button>
            {isTasksOpen && (
              <div className="pl-4 mt-2 space-y-1">
                <p className="text-gray-300 hover:text-white cursor-pointer">
                  Task 1
                </p>
                <p className="text-gray-300 hover:text-white cursor-pointer">
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
              <span className="text-gray-400 text-lg">→</span>
              <h2
                className={`text-2xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                RD Sales Tasks
              </h2>
            </div>
            <button 
              onClick={() => setIsNewTaskOpen(true)}
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              + New Task
            </button>
          </div>

          {/* Task Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="border border-gray-700/50 rounded-2xl p-4 bg-gray-800/50 backdrop-blur-sm hover:scale-105 hover:shadow-lg transition"
              >
                <div className="flex space-x-2 mb-2">
                  {task.labels.map((label, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-purple-600/70"
                    >
                      {label}
                    </span>
                  ))}
                </div>

                <h3 className="font-semibold mb-2">{task.title}</h3>

                <div className="flex flex-wrap gap-2 mb-2">
                  {task.assignedTo.map((user, idx) => (
                    <div
                      key={idx}
                      className="px-2 py-1 rounded-lg bg-blue-600 text-white text-xs"
                    >
                      {user}
                    </div>
                  ))}
                </div>

                <div className="flex justify-between text-sm text-gray-400">
                  <span>{task.date}</span>
                  <span>👁 {Math.floor(Math.random() * 50)} views</span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* New Task Modal - Full Page Overlay */}
      {isNewTaskOpen && (
        <div className="fixed inset-0 bg-gray-900 z-50">
          {/* Top Border */}
          <div className="h-1 border-t-2 border-white"></div>
          
          <div className="h-full flex">
            {/* Sidebar */}
            <aside className="w-64 border-r-2 border-white relative">
              {/* Company Header */}
              <div className="p-6 border-b-2 border-white">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 border border-white rounded"></div>
                  <span className="text-white text-lg">Company</span>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="p-6 space-y-2">
                <button className="w-full text-left text-white text-lg py-2">
                  Projects
                </button>
                <button className="w-full text-left text-white text-lg py-2">
                  My Tasks
                </button>
              </div>

              {/* Theme Toggle */}
              <div className="absolute bottom-20 left-6">
                <div className="flex space-x-1 bg-white p-1 rounded">
                  <button
                    onClick={() => setIsDarkMode(false)}
                    className={`p-2 rounded transition-colors ${
                      !isDarkMode
                        ? "bg-yellow-500 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    ☀️
                  </button>
                  <button
                    onClick={() => setIsDarkMode(true)}
                    className={`p-2 rounded transition-colors ${
                      isDarkMode
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    🌙
                  </button>
                </div>
              </div>

              {/* User Info */}
              <div className="absolute bottom-6 left-6 flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">U</span>
                </div>
                <div>
                  <div className="text-white text-sm">Test User</div>
                  <div className="text-gray-400 text-xs">user@mail.com</div>
                </div>
                <button className="text-gray-400 hover:text-white">
                  ...
                </button>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 border-r-2 border-white">
              {/* Header */}
              <header className="border-b-2 border-white px-8 py-4">
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="Search......."
                    className="bg-transparent border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-400 focus:border-white focus:outline-none"
                  />
                  <div className="text-white">
                    <span>➤ Projects ➤ New Task</span>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={handleDiscardTask}
                      className="px-4 py-2 border border-blue-500 text-blue-400 rounded hover:bg-blue-500/10 transition-colors"
                    >
                      Discard
                    </button>
                    <button
                      onClick={handleSaveTask}
                      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </header>

              {/* Form Content */}
              <div className="px-8 py-8">
                <div className="space-y-8">
                  {/* Name */}
                  <div>
                    <label className="block text-white text-xl mb-4 font-light">Name</label>
                    <input
                      type="text"
                      value={newTask.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full bg-transparent border-b-2 border-white pb-3 text-white focus:outline-none text-lg"
                    />
                  </div>

                  {/* Assignee */}
                  <div>
                    <label className="block text-white text-xl mb-4 font-light">Assignee</label>
                    <input
                      type="text"
                      value={newTask.assignee}
                      onChange={(e) => handleInputChange('assignee', e.target.value)}
                      className="w-full bg-transparent border-b-2 border-white pb-3 text-white focus:outline-none text-lg"
                    />
                  </div>

                  {/* Project */}
                  <div>
                    <label className="block text-white text-xl mb-4 font-light">Project</label>
                    <input
                      type="text"
                      value={newTask.project}
                      onChange={(e) => handleInputChange('project', e.target.value)}
                      className="w-full bg-transparent border-b-2 border-white pb-3 text-white focus:outline-none text-lg"
                    />
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="block text-white text-xl mb-4 font-light">Tags</label>
                    <input
                      type="text"
                      value={newTask.tags}
                      onChange={(e) => handleInputChange('tags', e.target.value)}
                      className="w-full bg-transparent border-b-2 border-white pb-3 text-white focus:outline-none text-lg"
                    />
                  </div>

                  {/* Deadline */}
                  <div>
                    <label className="block text-white text-xl mb-4 font-light">Deadline</label>
                    <input
                      type="date"
                      value={newTask.deadline}
                      onChange={(e) => handleInputChange('deadline', e.target.value)}
                      className="w-full bg-transparent border-b-2 border-white pb-3 text-white focus:outline-none text-lg"
                    />
                  </div>

                  {/* Image */}
                  <div>
                    <label className="block text-white text-xl mb-4 font-light">Image</label>
                    <button className="flex items-center space-x-2 px-4 py-2 border border-white rounded text-white hover:bg-white hover:text-black transition-colors">
                      <span>📎</span>
                      <span>Upload Image</span>
                    </button>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-white text-xl mb-4 font-light">Description</label>
                    <textarea
                      value={newTask.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={6}
                      className="w-full bg-transparent border-2 border-white rounded-lg p-4 text-white focus:outline-none resize-none text-lg"
                    />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      )}
    </div>
  );
}