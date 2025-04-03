// server.js
import express from 'express';
import mongoose from 'mongoose'; // backend/server.js
import cors from 'cors';
import connectDB from './db.js'; // backend/server.js (ensure you use .js)
import agentRoutes from './routes/agents.js'; // backend/server.js (ensure you use .js)

const app = express();
const port = 5000; // You can change this to another port if needed

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors()); // Allows cross-origin requests from frontend

// Routes
app.use('/agents', agentRoutes);
const PORT = process.env.PORT || 5000;

// Example route to test if the server is working
app.get('/', (req, res) => {
  res.send('Agent Creation Backend is Running');
});

// API route to create an agent
app.post('/create-agent', (req, res) => {
  const agentData = req.body;
  console.log('Agent Creation Request:', agentData);
  res.status(200).json({ message: 'Agent created successfully', data: agentData });
});

// API route to update an agent
app.put('/update-agent/:id', (req, res) => {
  const agentId = req.params.id;
  const updatedAgentData = req.body;
  console.log(`Updating agent with ID ${agentId}`, updatedAgentData);
  res.status(200).json({ message: 'Agent updated successfully', data: updatedAgentData });
});

// API Route to delete an agent by ID
app.delete('/delete-agent/:id', (req, res) => {
  const agentId = req.params.id;
  console.log(`Deleting agent with ID: ${agentId}`);
  res.status(200).json({ message: `Agent with ID ${agentId} deleted successfully` });
});

// API Route to get a specific agent's data by ID
app.get('/get-agent/:id', (req, res) => {
  const agentId = req.params.id;
  console.log(`Fetching agent with ID: ${agentId}`);
  const mockAgentData = {
    id: agentId,
    name: 'Test Agent',
    type: 'Sales',
    status: 'Active',
  };
  res.status(200).json(mockAgentData);
});

// API Route to get all agents
app.get('/agents', (req, res) => {
  const mockAgents = [
    { id: 1, name: 'Agent 1', type: 'Sales', status: 'Active' },
    { id: 2, name: 'Agent 2', type: 'Support', status: 'Inactive' },
  ];
  res.status(200).json(mockAgents);
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
