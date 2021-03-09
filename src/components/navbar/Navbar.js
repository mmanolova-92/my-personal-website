import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {

  render() {

    return (

      <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand" href="#">
            <img className="logo" src="logo.png" alt="Logo" width="40"/>
          </a>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section_about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section_services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section_skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section_contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

    )
  }
}

export default Navbar;
