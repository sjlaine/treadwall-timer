import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import logo from './logo.png';

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <img className="App-logo" src={logo} />
        <h1 className="App-title">Treadwall Timer</h1>
        <div className="subtitles">
          <Link to="/stopwatch">
            <h2 className="App-subtitle">Stopwatch</h2>
          </Link>
          <Link to="/timers">
            <h2 className="App-subtitle">Timers</h2>
          </Link>
          <Link to="/custom">
            <h2 className="App-subtitle">Custom</h2>
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Header;
