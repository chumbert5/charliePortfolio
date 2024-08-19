import React from 'react';
import './App.scss'; // Adjust path if needed
import { bigProjects } from './portfolio'; // Import bigProjects from portfolio
import BigProjects from './components/bigProjects'; // Import the BigProjects component

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
