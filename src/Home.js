import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import logo from './GP81.png';

const Home = () => {
  return (
    <div>
      <header className="App-home">
        <div className="App-header">
          <img className="App-logo" src={logo} alt="GPLogo" />
          <h1 className="App-title">Treadwall Timer</h1>
        </div>
        <div className="links">
          <Link to="/stopwatch" style={{ textDecoration: 'none' }}>
            <h2 className="App-link">Stopwatch</h2>
          </Link>
          <Link to="/countdown" style={{ textDecoration: 'none' }}>
            <h2 className="App-link">Countdown</h2>
          </Link>
          <Link to="/form" style={{ textDecoration: 'none' }}>
            <h2 className="App-link">Custom</h2>
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Home;
