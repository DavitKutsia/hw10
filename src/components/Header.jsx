import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="Header">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/hobbies">Hobbies</Link>
    </div>
  );
}
