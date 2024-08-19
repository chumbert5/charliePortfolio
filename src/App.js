import React from 'react';
import './App.css'; // Adjust path if needed
import { bigProjects } from './portfolio'; // Import bigProjects from portfolio
import BigProjects from './components/BigProjects'; // Import the BigProjects component

function App() {
  return (
    <div className="App">
      {/* Other sections/components */}
      
      {bigProjects.display && (
        <BigProjects 
          title={bigProjects.title}
          subtitle={bigProjects.subtitle}
          projects={bigProjects.projects}
        />
      )}
      
      {/* Other sections/components */}
    </div>
  );
}

export default App;
