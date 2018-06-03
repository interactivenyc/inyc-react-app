import React, { Component } from 'react';
import '../css/TopNav.css';

class TopNav extends Component {
  render() {
    return (
      <div className="nav-container">

        <div className="logo">LOGO</div>

        <nav className="site-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Profile</a></li>
            <li><a href="/">Upload</a></li>
          </ul>
        </nav>

        <div className="login">
          <a href="/">LOGIN</a>
        </div>

      </div>
    );
  }
}

export default TopNav;
