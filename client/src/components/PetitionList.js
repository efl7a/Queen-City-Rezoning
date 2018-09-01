import React from 'react';
import { Link } from 'react-router-dom';

const PetitionList = ({ petitions }) => {
  const renderPetitions = petitions.map(petition =>
    // <Link style={{ marginRight: '12px' }} key={petition.id} to={`/petitions/${petition.id}`}>{petition.name}</Link>
    <div key={petition.id}>
      <Link to={`/${petition.id}`}>{petition.number}</Link>
      <p>{petition.description}</p>
    </div>


  );

  return (
    <div>
      {renderPetitions}
    </div>
  );
};

export default PetitionList;
