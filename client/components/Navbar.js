import React from 'react';
import { Link } from 'react-router-dom';

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
        <img id='logo' src="https://upload.wikimedia.org/wikipedia/commons/6/63/%EC%95%A0%ED%84%B0%EB%AF%B8_logo.jpg"></img>
        <section className="nav-links">
          <Link to="/">What</Link>
          <Link to="/why">Why</Link>
          <Link to="/how">How</Link>
        </section>
      </div>
    </nav>
  );
};

export default NavBar;
