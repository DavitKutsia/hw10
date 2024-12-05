import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function Hobbies() {
  const hobbies = ['Working out', 'Reading', 'Swimming']; // List of hobbies

  return (
    <div>
      <Header /> {/* Reusable header component */}

      <div className="container">
        <h1>Hobbies Page</h1>
        {/* Display each hobby */}
        {hobbies.map((hobby, index) => (
          <div key={index}>
            <h2>{hobby}</h2>
            <Link to={`/hobbies/${hobby.toLowerCase().replace(' ', '-')}`}>
              Show More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hobbies;
