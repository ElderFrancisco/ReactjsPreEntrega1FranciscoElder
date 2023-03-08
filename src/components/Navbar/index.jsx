import React from 'react'
import logostarbucks from './starbucks.png'
import './main.scss'

const Navbar = () => {
  return (
    <nav class="navbar">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={logostarbucks} alt="Logo" width="30" height="24" class="d-inline-block"/>
        <h1>Starbucks</h1>
    </a>
    <ul>
        <li><a href="">menu</a></li>
        <li><a href="">order</a></li>
        <li><a href="">rewards</a></li>
    </ul>
  </div>
</nav>
  );
};

export default Navbar