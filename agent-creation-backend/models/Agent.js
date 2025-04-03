// backend/models/Agent.js
import mongoose from 'mongoose';

// Define the Agent schema
const agentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'active',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Agent = mongoose.model('Agent', agentSchema);

// Default export of the Agent model
export default Agent;
