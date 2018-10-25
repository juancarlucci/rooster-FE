import React, { Component } from 'react';
import './Nav.css';
import './style.css';

class Nav extends Component {
  render() {
    return (
      <nav className="LiftIgniter">
        <img className="nav-image" src="./images/igniter-logo-white.png" alt="LiftIgniter" />
      </nav>
    );
  }
}

export default Nav;
