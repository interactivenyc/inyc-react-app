import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HamburgerMenu.css';
import HamburgerPNG from '../images/hamburger_black.png';

function clickOutside(event) {
  if (!event.target.matches('.hamburger-button')) {
    const dropdowns = document.getElementsByClassName('hamburger-dropdown-content');
    let i;
    for (i = 0; i < dropdowns.length; i += 1) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

window.addEventListener('click', clickOutside);

function onClickExample() {
  document.getElementById('hamburger-dropdown').classList.toggle('show');
  console.log('fuck');
}

const HamburgerMenu = () => (
  <div className="hamburger-menu">
    <div className="hamburger-icon">
      <img src={HamburgerPNG} className="hamburger-icon" alt="menu icon" />
    </div>

    <div role="button" onClick={onClickExample} className="hamburger-menu-icon">
      <div className="hamburger-menu-bg">
        <div className="hamburger-lines" />
        <div className="hamburger-lines" />
        <div className="hamburger-lines" />
      </div>
    </div>

    <div id="hamburger-dropdown" className="hamburger-dropdown-content">
      <Link to="/ImageOverlay">ImageOverlay</Link>
      <Link to="/StyledTable">StyledTable</Link>
      <Link to="/StyledForm">StyledForm</Link>
      <Link to="/DropdownMenu">DropdownMenu</Link>
      <Link to="/ResponsiveGrid">ResponsiveGrid</Link>
      <Link to="/Slideshow">Slideshow</Link>
    </div>

  </div>
  );

export default HamburgerMenu;
