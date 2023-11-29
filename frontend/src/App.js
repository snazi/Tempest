// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Player from './components/Player';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="h-screen">
          <Header />
          <Routes>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/player" element={<Player />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/Tempest" element={<LandingPage />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
