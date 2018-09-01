import React from 'react';
import { connect } from 'react-redux';

const PetitionsShow = ({ petition }) =>
  <div>
    Petition Details
    {/* <h2>{petition.number}</h2>
    <p>{petition.description}</p>
    <p>{petition.petitioner}</p> */}
  </div>;

const mapStateToProps = (state, ownProps) => {
  let petition = state.petitions.find(petition => petition.id === +ownProps.match.params.petitionId)
  if(petition){
    return { petition }
  } else {
    return {
    petition: {}
    };
  }
};

export default connect(mapStateToProps)(PetitionsShow);
