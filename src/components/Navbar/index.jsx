import React from 'react';
import logostarbucks from './starbucks.png';
import './main.scss';

const Navbar = ({ nombre }) => {
  return (
    <nav class='navbar'>
      <div class='container-fluid'>
        <a class='navbar-brand' href='#'>
          <img
            src={logostarbucks}
            alt='Logo'
            width='30'
            height='24'
            class='d-inline-block'
          />
          <h1>Starbucks</h1>
        </a>
        <ul>
          <li>
            <a href=''>{nombre}</a>
          </li>
          <li>
            <a href=''>{nombre}</a>
          </li>
          <li>
            <a href=''>{nombre}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
