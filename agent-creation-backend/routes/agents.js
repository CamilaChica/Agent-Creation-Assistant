// backend/routes/agents.js

import express from 'express';
import Agent from '../models/Agent.js';
const router = express.Router();

// Route to get all agents
router.get('/', async (req, res) => {
  try {
    const agents = await Agent.find();
    res.json(agents);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching agents' });
  }
});

// Route to create a new agent
router.post('/', async (req, res) => {
  const { name, type, status } = req.body;

  try {
    const newAgent = new Agent({
      name,
      type,
      status,
    });

    await newAgent.save();
    res.status(201).json(newAgent);
  } catch (err) {
    res.status(500).json({ message: 'Error creating agent' });
  }
});

// Route to get a specific agent by ID
router.get('/:id', async (req, res) => {
  try {
    const agent = await Agent.findById(req.params.id);

    if (!agent) {
      return res.status(404).json({ message: 'Agent not found' });
    }

    res.json(agent);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching agent' });
  }
});

// Route to delete an agent by ID
router.delete('/:id', async (req, res) => {
  try {
    const agent = await Agent.findByIdAndDelete(req.params.id);

    if (!agent) {
      return res.status(404).json({ message: 'Agent not found' });
    }

    res.json({ message: 'Agent deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting agent' });
  }
});

//module.exports = router;
export default router;