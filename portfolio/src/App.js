// Package imports
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// Component imports
import Navbar from './components/Navbar';

// CSS imports
import './App.css';

import Home from './components/pages/Home.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* Add persistent components*/}
        <Routes>
          {/* Add Routes */}
          {/*  <Route exact path='/' element={<Component />} /> */}
          <Route exact path='/' element={<Home />} />
          <Route path='/mysite2' element={<p>Hi</p>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
