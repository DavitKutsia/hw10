import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';

function HobbyDetail() {
  const { hobbyName } = useParams(); // Get hobby name from URL

  // Object containing hobby details
  const hobbiesDetails = {
    'working-out': {
      title: 'Working Out',
      description: 'Working out is essential for maintaining physical and mental health. It boosts energy and reduces stress.',
      funFact: 'Regular exercise improves brain function and memory.',
    },
    'reading': {
      title: 'Reading',
      description: 'Reading books is a relaxing hobby that transports you to different worlds and enriches your knowledge.',
      funFact: 'People who read regularly are proven to be more empathetic.',
    },
    'swimming': {
      title: 'Swimming',
      description: 'Swimming is a full-body workout that improves cardiovascular health and builds endurance.',
      funFact: 'The first swimming competitions date back to the 19th century.',
    },
  };

  const hobby = hobbiesDetails[hobbyName.toLowerCase()]; // Match hobby by name

  return (
    <div>
      <Header /> {/* Reusable header component */}

      <div className="container">
        <Link to="/hobbies">← Back</Link> {/* Back link */}

        {/* Display hobby details */}
        {hobby ? (
          <>
            <h1>{hobby.title}</h1>
            <p>{hobby.description}</p>
            <h2>Fun Fact</h2>
            <p>{hobby.funFact}</p>
          </>
        ) : (
          <h1>Hobby not found</h1>
        )}
      </div>
    </div>
  );
}

export default HobbyDetail;
