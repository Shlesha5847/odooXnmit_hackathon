const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }], 
}, { timestamps: true });

module.exports = mongoose.model("project", projectSchema);