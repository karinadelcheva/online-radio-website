import React from 'react';

function Header() {
  return (
    <header >
      <div className="navbar">
        <a className="navLink" href="/">Home</a>
        <a className="navLink" href="profile">Me</a>
        <a className="navLink" href="artists">Artists</a>
        <a className="navLink" href="shows">Shows</a>
        <a className="navLink" href="about">About</a>

      </div>

    </header>

  );
}

export default Header;
