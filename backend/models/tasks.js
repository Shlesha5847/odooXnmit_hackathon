const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: "project", required: true },
  title: { type: String, required: true },
  description: { type: String },
  assignee: { type: mongoose.Schema.Types.ObjectId, ref: "user" }, // who it's assigned to
  dueDate: { type: Date },
  status: { 
    type: String, 
    enum: ["To-Do", "In Progress", "Done"], 
    default: "To-Do" 
  },
}, { timestamps: true });

module.exports = mongoose.model("task", taskSchema);