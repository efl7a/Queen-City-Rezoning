import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';
import { connect } from 'react-redux';
import { petitionByDistrict } from '../actions/petitionActions';

const NavBar = (props) => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
        Petition By District
        <select onChange={(event)=> this.props.petitionByDistrict(event.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="Outside City Limits">Outside City Limits</option>
        </select>
      <Search />
    </div>
  )
}

export default connect(null, { petitionByDistrict })(NavBar);
