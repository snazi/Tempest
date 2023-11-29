// import logo from './logo.svg';
import './App.css';
import possibleLogo from './temp-pic.png'
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'; // Adjust the import path

function App() {
  return (
    <Router>
    <div className="App">
        <header className="App-header">
            <img src={possibleLogo} className="App-logo" alt="logo" />
            <p>My idol</p>
            <Link to="/home">Go to Home Page</Link>
        </header>
    </div>
    <Routes>
        <Route path="/home" element={<HomePage />} />
    </Routes>
</Router>
  );
}

export default App;
