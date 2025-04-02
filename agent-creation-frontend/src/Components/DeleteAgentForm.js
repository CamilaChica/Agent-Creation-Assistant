import React, { useState } from 'react';
import axios from 'axios';

const DeleteAgentForm = () => {
  const [agentId, setAgentId] = useState('');

  // Function to handle form submission (delete agent)
  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      // Send DELETE request to backend API
      const response = await axios.delete(`http://localhost:5000/delete-agent/${agentId}`);
      console.log(response.data);
    } catch (error) {
      console.error('Error deleting agent:', error);
    }
  };

  return (
    <form onSubmit={handleDelete}>
      <div>
        <label>Agent ID:</label>
        <input 
          type="text" 
          value={agentId} 
          onChange={(e) => setAgentId(e.target.value)} 
          required
        />
      </div>
      <button type="submit">Delete Agent</button>
    </form>
  );
};

export default DeleteAgentForm;
