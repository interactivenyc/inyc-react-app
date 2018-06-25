import React from 'react';
// import { Link } from 'react-router-dom';
import '../css/HamburgerMenu.css';

function clickOutside(event) {
  if (!event.target.matches('.example-button')) {
    const dropdowns = document.getElementsByClassName('example-dropdown-content');
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
  // document.getElementById('example-dropdown').classList.toggle('show');
  console.log('fuck');
}

const HamburgerMenu = () => (
  <div className="hamburger-menu">

    <div role="button" onClick={onClickExample}>
      <div className="hamburger" />
      <div className="hamburger" />
      <div className="hamburger" />
    </div>

  </div>
  );

export default HamburgerMenu;
