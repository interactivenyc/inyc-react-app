import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import ExamplesMenu from './ExamplesMenu';
import HamburgerMenu from './HamburgerMenu';
import '../css/TopNav.css';

class TopNav extends Component {
  render() {
    return (
      <div className="nav-container">

        <div className="logo">InteractiveNYC</div>

        <div className="site-nav-container">

          <div className="site-nav-lg">
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

          <div className="site-nav-sm">
            <HamburgerMenu />
          </div>

        </div>


      </div>
    );
  }
}

export default TopNav;
