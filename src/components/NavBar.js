import React from 'react';

const NavBar = ({ onLogout }) => {
  return (
    <nav>
      <div class='container-fluid navbar_container'>
        <a class='navbar-brand' href='#'>
          DemoApp
        </a>

        <div class='' id='navbarNav'>
          <ul class='navbar-nav'>
            <li class='nav-item active'>Home</li>
            <li class='nav-item'>Profile</li>
            <li class='nav-item' onClick={onLogout}>
              Logout
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
