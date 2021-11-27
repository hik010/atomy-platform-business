import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div className="top">
        <a href="https://www.atomy.com:449/us/Home/Account/Login">Login</a>
        <a href="https://www.atomy.com:449/us/Home/Account/MemberJoin">
          Join Us
        </a>
      </div>
      <div className="bottom">
        <section style={{ display: 'flex', alignItems: 'center' }}>
          <img
            id="logo"
            src="https://logos-download.com/wp-content/uploads/2021/01/Atomy_Logo.png"
          ></img>
          <h1 style={{ marginLeft: '10px', fontSize: 'xx-large' }}>
            Platform Business
          </h1>
        </section>

        <section className="nav-links">
          <NavLink to="/" >What</NavLink>
          <NavLink to="/why" >Why</NavLink>
          <NavLink to="/how" >How</NavLink>
        </section>
      </div>
    </nav>
  );
};

export default NavBar;
