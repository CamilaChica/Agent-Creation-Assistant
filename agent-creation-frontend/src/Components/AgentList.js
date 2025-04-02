import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AgentList = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/agents');
        setAgents(response.data);
      } catch (error) {
        console.error('There was an error fetching the agents:', error);
      }
    };

    fetchAgents();
  }, []);

  return (
    <div>
      <h2>All Agents</h2>
      <ul>
        {agents.map(agent => (
          <li key={agent.id}>
            <h3>{agent.name}</h3>
            <p>Type: {agent.type}</p>
            <p>Description: {agent.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgentList;
