import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navbar from '../Navbar';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Profile from '../Pages/Profile';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container pt-4">
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/profile/:name" element={<Profile/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
