const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    tags: [
      {
        type: String,
      },
    ],
    projectManager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user", // Reference to User model
      required: true,
    },
    teamMembers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    deadline: {
      type: Date,
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("project", projectSchema);