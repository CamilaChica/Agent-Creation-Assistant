// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000; // You can change this to another port if needed

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Example route to test if the server is working
app.get('/', (req, res) => {
  res.send('Agent Creation Backend is Running');
});

// API route to create an agent
app.post('/create-agent', (req, res) => {
  // This is where we handle creating the agent logic
  const agentData = req.body;
  
  // For now, we can just log the data to verify the request
  console.log('Agent Creation Request:', agentData);

  // You can add your logic here to create the agent in your database
  // If the creation is successful, return a success response
  res.status(200).json({ message: 'Agent created successfully', data: agentData });
});

// API route to update an agent
app.put('/update-agent/:id', (req, res) => {
    const agentId = req.params.id; // The agent's ID to update
    const updatedAgentData = req.body; // The data to update
    
    console.log(`Updating agent with ID ${agentId}`, updatedAgentData);
    
    // Logic to update the agent in your database will go here
    
    res.status(200).json({ message: 'Agent updated successfully', data: updatedAgentData });
  });

// API Route to delete an agent by ID
app.delete('/delete-agent/:id', (req, res) => {
    const agentId = req.params.id; // Extract the agent ID from the URL parameter
  
    // Logic to delete the agent from your database goes here
    // For now, we'll just log the ID of the agent to be deleted
    console.log(`Deleting agent with ID: ${agentId}`);
  
    // Assume the agent is deleted successfully
    res.status(200).json({ message: `Agent with ID ${agentId} deleted successfully` });
  });

// API Route to get a specific agent's data by ID
app.get('/get-agent/:id', (req, res) => {
    const agentId = req.params.id; // Extract the agent ID from the URL parameter
  
    // Logic to fetch the agent from your database goes here
    // For now, we'll return a placeholder response
    console.log(`Fetching agent with ID: ${agentId}`);
  
    const mockAgentData = {
      id: agentId,
      name: 'Test Agent',
      type: 'Sales',
      status: 'Active',
    };
  
    res.status(200).json(mockAgentData); // Return mock agent data
  });
  
// API Route to get all agents (for display)
app.get('/agents', (req, res) => {
    // Logic to fetch all agents from your database goes here
    // For now, we'll return a mock list of agents
    const mockAgents = [
      { id: 1, name: 'Agent 1', type: 'Sales', status: 'Active' },
      { id: 2, name: 'Agent 2', type: 'Support', status: 'Inactive' },
    ];
  
    res.status(200).json(mockAgents); // Return the list of agents
  });
  

// API route to get list of agents (for now, it's just a placeholder)
app.get('/agents', (req, res) => {
  // In the future, this will fetch data from a database
  res.status(200).json({ agents: [] });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

