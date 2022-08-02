import React, { Component } from 'react';

const NavBar = ({totalCounters}) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge badge-pill badge-secondary m-2">{totalCounters}</span>
        </a>
      </div>
    </nav>
  );
}
 
export default NavBar;