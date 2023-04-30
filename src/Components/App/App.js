import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from '../Navbar';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Profile from '../Pages/Profile';
import Alert  from '../Alert';
import { AlertState } from '../../context/alert/AlertState';

const App = () => {
  return (
    <AlertState>
      <Router>
        <Navbar />
        <div className="container pt-4">
          <Alert alert={{text: 'test alert'}}/>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/profile/:name" element={<Profile/>}/>
          </Routes>
        </div>
      </Router>
    </AlertState>
  );
}

export default App;
