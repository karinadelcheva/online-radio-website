import React from 'react';

function Header() {
  return (
    <header className="mb5 pt5">
      <h1 className="ttu f3 tracked-mega tc mt0 mb3">Marmalade.fm</h1>
      <ul className="list flex justify-center pl0">
        <li className="mh2">
          <a className="nav-link link biryani-black f6 ttu white" href="/">HOME</a>
        </li>

        <li className="mh2">
          <a className="nav-link link biryani-black f6 ttu white" href="profile">ME</a>
        </li>

        <li className="mh2">
          <a className="nav-link link biryani-black f6 ttu white" href="artists">ARTISTS</a>
        </li>

        <li className="mh2">
          <a className="nav-link link biryani-black f6 ttu white" href="shows">SHOWS</a>
        </li>
        
        <li className="mh2">
          <a className="nav-link link biryani-black f6 ttu white" href="about">ABOUT</a>
        </li>

      </ul>

    </header>

  );
}

export default Header;

