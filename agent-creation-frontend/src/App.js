// Move all imports to the top of the file
import React, { useState, useEffect } from 'react';
import AgentForm from './Components/AgentForm'; // Correctly placed at the top
import AgentList from './Components/AgentList'; // Correctly placed at the top
import './App.css';

function App() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch('http://localhost:5000/agents');
        const data = await response.json();
        // Check if the response is an array
        if (Array.isArray(data.agents)) {
          setAgents(data.agents);
        } else {
          throw new Error('Data is not in the expected format');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  return (
    <div className="App">
      <h1>Agent Creation Assistant</h1>
      
      <AgentForm />
      
      {/* Error message if there is an issue */}
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      
      {/* Show loading message while waiting for data */}
      {loading && <div>Loading agents...</div>}

      {/* Render the list of agents */}
      {!loading && !error && <AgentList agents={agents} />}
    </div>
  );
}


export default App;




// export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
