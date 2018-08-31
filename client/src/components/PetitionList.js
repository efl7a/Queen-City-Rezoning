import React from 'react';

const PetitionsList = ({ petitions }) => {
  const renderPetitions = petitions.map(petition =>
    // <Link style={{ marginRight: '12px' }} key={petition.id} to={`/petitions/${petition.id}`}>{petition.name}</Link>
    <div key={petition.id}>
      {petition.number}
      <p>{petition.description}</p>
    </div>

  );

  return (
    <div>
      {renderPetitions}
    </div>
  );
};

export default PetitionsList;
