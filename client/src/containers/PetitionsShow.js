import React from 'react';
import { connect } from 'react-redux';

import CommentsPage from './CommentsPage'

const PetitionsShow = ({ petition }) => {
  return (
    <div>
      <h2>{petition.number}</h2>
      <table>
        <tr>
          <th>District</th>
          <td>{petition.district}</td>
        </tr>
        <tr>
          <th>Petitioner</th>
          <td>{petition.petitioner}</td>
        </tr>
        <tr>
          <th>Description</th>
          <td>{petition.description}</td>
        </tr>
        <tr>
          <th>Website</th>
          <td>{petition.website}</td>
        </tr>
        <tr>
          <th>Decision</th>
          <td>{petition.decision}</td>
        </tr>
        <tr>
          <th>Decision Date</th>
          <td>{petition.decision_date}</td>
        </tr>
      </table>
      <h2>Comments</h2>
      {/* <CommentsNew petitionId={petition.id}/> */}
      <CommentsPage petitionId={petition.id} />
    </div>
  );
}

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
