import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchAgentForm = () => {
  const [agentId, setAgentId] = useState('');
  const [agentData, setAgentData] = useState(null);

  // Function to handle form submission (fetch agent)
  const handleFetch = async (e) => {
    e.preventDefault();

    try {
      // Send GET request to backend API
      const response = await axios.get(`http://localhost:5000/get-agent/${agentId}`);
      setAgentData(response.data);
    } catch (error) {
      console.error('Error fetching agent:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleFetch}>
        <div>
          <label>Agent ID:</label>
          <input 
            type="text" 
            value={agentId} 
            onChange={(e) => setAgentId(e.target.value)} 
            required
          />
        </div>
        <button type="submit">Fetch Agent</button>
      </form>

      {agentData && (
        <div>
          <h3>Agent Details</h3>
          <p>Name: {agentData.name}</p>
          <p>Type: {agentData.type}</p>
          <p>Status: {agentData.status}</p>
        </div>
      )}
    </div>
  );
};

export default FetchAgentForm;
