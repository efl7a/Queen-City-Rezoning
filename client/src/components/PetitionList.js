import React from 'react';
import { Link } from 'react-router-dom';

const PetitionList = ({ petitions }) => {
  const renderPetitions = petitions.map(petition =>
    // <Link style={{ marginRight: '12px' }} key={petition.id} to={`/petitions/${petition.id}`}>{petition.name}</Link>
    <div key={petition.id}>
      <table className="list">
        <tr>
          <th className="petNum">Petition Number: </th>
          <td className="petNum"><Link to={`/${petition.id}`}>{petition.number}</Link></td>
          <th className="district">District: </th>
          <td className="district">{petition.district}</td>
        </tr>
      </table>
      <p>{petition.description}</p>
      <hr/>
    </div>


  );

  return (
    <div>
      {renderPetitions}
    </div>
  );
};

export default PetitionList;
