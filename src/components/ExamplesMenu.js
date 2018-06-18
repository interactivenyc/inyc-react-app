import React from 'react';
import { Link } from 'react-router-dom';

import '../css/ExamplesMenu.css';

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
  document.getElementById('example-dropdown').classList.toggle('show');
}

const ExamplesMenu = () => (
  <div className="examples-menu">

    <div className="example-dropdown">
      <button onClick={onClickExample} className="example-button">Examples</button>
      <div id="example-dropdown" className="example-dropdown-content">
        <Link to="/ImageOverlay">ImageOverlay</Link>
        <Link to="/StyledTable">StyledTable</Link>
        <Link to="/StyledForm">StyledForm</Link>
        <Link to="/DropdownMenu">DropdownMenu</Link>
        <Link to="/ResponsiveGrid">ResponsiveGrid</Link>
        <Link to="/Slideshow">Slideshow</Link>
      </div>
    </div>

  </div>
  );

export default ExamplesMenu;
