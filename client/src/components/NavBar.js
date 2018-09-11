import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';

const NavBar = (props) => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/petitions/districts/1">District 1</NavLink>
      <Search />
    </div>
  )
}

export default NavBar;
