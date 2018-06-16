import React from 'react';
import '../../css/examples/DropdownMenu.css';

function clickOutside(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
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

function onClick() {
  document.getElementById('myDropdown').classList.toggle('show');
}

const DropdownMenu = () => (
  <div className="dropdown-menu">
    <div className="code-view-link"><a href="https://codepen.io/steve-warren/pen/bKEXRj" target="_blank" rel="noopener noreferrer">View the code on codepen.io</a></div>
    <div className="dropdown">
      <button onClick={onClick} className="dropbtn">Dropdown</button>
      <div id="myDropdown" className="dropdown-content">
        <a>Link 1</a>
        <a>Link 2</a>
        <a>Link 3</a>
      </div>
    </div>
  </div>
  );

export default DropdownMenu;
