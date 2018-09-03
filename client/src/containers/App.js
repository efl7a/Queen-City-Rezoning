import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


import PetitionsPage from './PetitionsPage';
import PetitionsShow from './PetitionsShow';

var rezoningLogo = require(`../images/rezoningLongLogo.png`)

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className='logo-container'>
            <img src={rezoningLogo} alt='rezoning logo' className='logo' />
          </div>
          <div className="content">
            <Route exact path='/' render={(props) => <PetitionsPage {...props}/>} />
            <Route exact path='/:petitionId' component={PetitionsShow}/>
          </div>
        </div>
      </Router>

    );
  }
}



export default App;
