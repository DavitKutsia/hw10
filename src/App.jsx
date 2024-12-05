import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import HobbyDetail from './components/HobbyDetail';

function App() {
  return (
    <Router>
      {/* Define routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/hobbies/:hobbyName" element={<HobbyDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
