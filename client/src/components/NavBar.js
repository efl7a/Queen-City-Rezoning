import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../containers/Search';
// import { connect } from 'react-redux';
// import { petitionByDistrict } from '../actions/petitionActions';

const NavBar = () => {
  return (
    <div className="topnav">
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/district/1">Districts: 1</NavLink>
      <NavLink to="/district/2">2</NavLink>
      <NavLink to="/district/3">3</NavLink>
      <NavLink to="/district/4">4</NavLink>
      <NavLink to="/district/5">5</NavLink>
      <NavLink to="/district/6">6</NavLink>
      <NavLink to="/district/7">7</NavLink>
      <NavLink to="/district/Outside City Limits">Outside City Limits</NavLink>
        {/* Petitions By District
        <select onChange={(event) => petitionByDistrict(event.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="Outside City Limits">Outside City Limits</option>
        </select> */}
      <Search />
    </div>
  )
}

// export default connect(null, { petitionByDistrict })(NavBar);
export default NavBar
