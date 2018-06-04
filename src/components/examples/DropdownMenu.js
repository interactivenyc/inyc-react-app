import React from 'react';
import '../../css/examples/DropdownMenu.css';


window.addEventListener("click", clickOutside);

function clickOutside(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function onClick(event) {
  document.getElementById("myDropdown").classList.toggle("show");
}

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">

      <div className="dropdown">
        <button onClick={onClick} className="dropbtn">Dropdown</button>
        <div id="myDropdown" className="dropdown-content">
          <a href="">Link 1</a>
          <a href="">Link 2</a>
          <a href="">Link 3</a>
        </div>
      </div>

    </div>
  );
}

export default DropdownMenu;
