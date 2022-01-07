import React from 'react';

function Header() {
  return (
    <header >
      <div className="navbar">
        <a className="navLink" href="/">HOME</a>
        <a className="navLink" href="profile">ME</a>
        <a className="navLink" href="artists">ARTISTS</a>
        <a className="navLink" href="shows">SHOWS</a>
        <a className="navLink" href="about">ABOUT</a>

      </div>

    </header>

  );
}

export default Header;
