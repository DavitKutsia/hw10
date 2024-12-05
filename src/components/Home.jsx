import React from 'react';
import Header from './Header';

function Home() {
  return (
    <div>
      <Header /> {/* Reusable header component */}

      <div className="container">
        <h1>Home Page</h1>
        {/* Info section */}
        <div className="info">
          <p>
            GitHub: <a href="https://github.com/DavitKutsia" target="_blank" rel="noopener noreferrer">DavitKutsia</a>
          </p>
          <p>Email: iztarctic33@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
