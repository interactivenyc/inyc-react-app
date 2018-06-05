import React from 'react';
import { Link } from 'react-router-dom';

import '../css/ExamplesMenu.css';

window.addEventListener("click", clickOutside);

function clickOutside(event) {
  if (!event.target.matches('.example-button')) {
    var dropdowns = document.getElementsByClassName("example-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function onClickExample(event) {
  document.getElementById("example-dropdown").classList.toggle("show");
}

const ExamplesMenu = () => {
  return (
    <div className="examples-menu">

      <div className="example-dropdown">
        <button onClick={onClickExample} className="example-button">Examples</button>
        <div id="example-dropdown" className="example-dropdown-content">
          <Link to="/ImageOverlay">ImageOverlay</Link>
          <Link to="/StyledTable">StyledTable</Link>
          <Link to="/StyledForm">StyledForm</Link>
          <Link to="/DropdownMenu">DropdownMenu</Link>
        </div>
      </div>

    </div>
  );
}

export default ExamplesMenu;
