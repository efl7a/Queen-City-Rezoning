import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { fetchPetitions } from '../actions/petitionActions';
import PetitionsShow from './PetitionsShow';
import PetitionList from '../components/PetitionList';

class PetitionsPage extends Component {

  componentDidMount() {
    this.props.fetchPetitions()
  };
  render(){
    return (
      <div>
        Petitions from this year
        <PetitionList petitions={this.props.petitions}/>
        {/* <Switch> {/* Make sure to wrap all of your Routes as children of the Switch component*/ } */}
          <Route exact path={`${this.props.match.url}/:petitionId`} component={PetitionsShow}/>
        {/* </Switch> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    petitions: state.petitions
  }
}

export default  connect(mapStateToProps, { fetchPetitions } )(PetitionsPage);
