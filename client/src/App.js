import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { fetchPetitions } from './actions/petitionActions';
import PetitionList from './components/PetitionList';

class App extends Component {

  componentDidMount() {
    this.props.fetchPetitions()
  };

  render() {
    return (
      <div className="App">
        {this.props.petitions ? (
          <PetitionList petitions={this.props.petitions}/>) : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    petitions: state.petitions
  }
}

export default connect(mapStateToProps, { fetchPetitions } )(App);
