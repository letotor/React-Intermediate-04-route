import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';

import './style.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>{/* Add your links here */}</ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
