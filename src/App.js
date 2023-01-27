// Package imports
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// Component imports
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

// CSS imports
import './App.css';

import Home      from './components/pages/Home.js';
import Blog      from './components/pages/Blog.js';
import Todo      from './components/pages/Todo.js';
import Changelog from './components/pages/Changelog.js';

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
          <Route path='/blog' element={<Blog />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/changelog' element={<Changelog />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
