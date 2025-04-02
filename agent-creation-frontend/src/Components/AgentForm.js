import React, { useState } from 'react';
import axios from 'axios';

const AgentForm = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const agentData = {
      name,
      type,
      status,
    };

    try {
      // Send POST request to the backend API
      const response = await axios.post('http://localhost:5000/create-agent', agentData);
      console.log(response.data);
    } catch (error) {
      console.error('Error creating agent:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required
        />
      </div>
      <div>
        <label>Type:</label>
        <input 
          type="text" 
          value={type} 
          onChange={(e) => setType(e.target.value)} 
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <input 
          type="text" 
          value={status} 
          onChange={(e) => setStatus(e.target.value)} 
          required
        />
      </div>
      <button type="submit">Create Agent</button>
    </form>
  );
};

export default AgentForm;


// import React, { useState } from 'react';
// import axios from 'axios';

// const AgentForm = () => {
//   const [name, setName] = useState('');
//   const [type, setType] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/agents', {
//         name,
//         type,
//         description
//       });
//       alert('Agent created successfully!');
//       setName('');
//       setType('');
//       setDescription('');
//     } catch (error) {
//       console.error('There was an error creating the agent:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Create New Agent</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//         </div>
//         <div>
//           <label>Type:</label>
//           <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
//         </div>
//         <div>
//           <label>Description:</label>
//           <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
//         </div>
//         <button type="submit">Create Agent</button>
//       </form>
//     </div>
//   );
// };

// export default AgentForm;
