import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () =>
  <div>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/petitions/districts">Districts</NavLink>
  </div>
