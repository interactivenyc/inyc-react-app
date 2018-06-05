import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import ExamplesMenu from './ExamplesMenu';
import '../css/TopNav.css';

class TopNav extends Component {
  render() {
    return (
      <div className="nav-container">

        <div className="logo">InteractiveNYC</div>

        <nav className="site-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><ExamplesMenu /></li>
          </ul>
        </nav>

        <div className="login">
          <Login />
        </div>

      </div>
    );
  }
}

export default TopNav;
