

// import React, { useEffect, useState } from 'react'; 
// import axios from 'axios';

// const AgentList = () => {
//   const [agents, setAgents] = useState([]);  // Ensure it's initialized as an array
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  

//   // Fetch agents when the component mounts
//   useEffect(() => {
//     axios.get('http://localhost:5000/agents')
//     .then((response) => {
//       const data = Array.isArray(response.data) ? response.data : [];
//       setAgents(data); // Store the agents data
//       setLoading(false); // Set loading to false
//     })
//     .catch((err) => {
//       setError('Error fetching agents'); // Set error message if the request fails
//       setLoading(false);
//     });

//   /*
//     axios.get('http://localhost:5000/agents')
//       .then((response) => {
//         console.log(response.data);  // Log the response to check its structure
//         setAgents(response.data); // Store the agents data
//         setLoading(false); // Set loading to false
//       })
//       .catch((err) => {
//         setError('Error fetching agents'); // Set error message if the request fails
//         setLoading(false);
//       });
//       */
//   }, []);

  


//   if (loading) {
//     return <div>Loading agents...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h1>List of Agents</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Type</th>
//             <th>Status</th>
//             <th>Description</th> {/* Adding Description column from Block 2 */}
//           </tr>
//         </thead>
//         <tbody>
//           {Array.isArray(agents) && agents.length > 0 ? (
//             agents.map((agent) => (
//               <tr key={agent.id}>
//                 <td>{agent.id}</td>
//                 <td>{agent.name}</td>
//                 <td>{agent.type}</td>
//                 <td>{agent.status}</td>
//                 <td>{agent.description}</td> {/* Including Description from Block 2 */}
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5">No agents available.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
  
//   export default AgentList;


//SECOND BLOCK
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AgentList = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch agents when the component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/agents')
      .then((response) => {
        setAgents(response.data); // Store the agents data
        setLoading(false); // Set loading to false
      })
      .catch((err) => {
        setError('Error fetching agents'); // Set error message if the request fails
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading agents...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!Array.isArray(agents)) {
    return <div>Error: Expected an array of agents.</div>;
  }

  if (agents.length === 0) {
    return <div>No agents available.</div>;
  }

  return (
    <div>
      <h1>List of Agents</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent) => (
            <tr key={agent.id}>
              <td>{agent.id}</td>
              <td>{agent.name}</td>
              <td>{agent.type}</td>
              <td>{agent.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgentList;

//FIRST BLOCK

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AgentList = () => {
//   const [agents, setAgents] = useState([]);

//   useEffect(() => {
//     const fetchAgents = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/agents');
//         setAgents(response.data);
//       } catch (error) {
//         console.error('There was an error fetching the agents:', error);
//       }
//     };

//     fetchAgents();
//   }, []);

//   return (
//     <div>
//       <h2>All Agents</h2>
//       <ul>
//         {agents.map(agent => (
//           <li key={agent.id}>
//             <h3>{agent.name}</h3>
//             <p>Type: {agent.type}</p>
//             <p>Description: {agent.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
//   export default AgentList;