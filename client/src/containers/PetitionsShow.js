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
          <th>Description</th>
          <th>Petitioner</th>
        </tr>
        <tr>
          <td>{petition.district}</td>
          <td>{petition.description}</td>
          <td>{petition.petitioner}</td>
        </tr>
        <tr>
          <th>Decision</th>
          <th>Decision Date</th>
          <th>Website</th>
        </tr>
        <tr>
          <td>{petition.decision}</td>
          <td>{petition.decision_date}</td>
          <td>{petition.website}</td>
        </tr>
      </table>
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
