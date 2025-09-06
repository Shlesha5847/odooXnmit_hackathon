// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import ProjectDetail from "./components/ProjectDetail";
import MyTasks from "./components/MyTasks";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projectdetail" element={<ProjectDetail />} />
        <Route path="/mytasks" element={<MyTasks />} />
      </Routes>
    </Router>
  );
}

export default App;
