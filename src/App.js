import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ScorePage from './pages/ScorePage'

function App() {
  return (
    <div>
      <Navbar/>
      <HomePage />
      <ScorePage />
    </div>
  );
}

export default App;
