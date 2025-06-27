import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/post/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
