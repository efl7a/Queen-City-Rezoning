import React, { Component }  from 'react';
import { Link } from 'react-router-dom';

class PetitionList extends Component {

  sortingHandler = (sortBy) => {
    this.props.onSort(sortBy);
  }
  render (){
    const renderPetitions = this.props.petitions.map(petition =>
      <tbody key={petition.id}>
        <tr>
          <th className="petNum">Petition Number: </th>
          <td className="petNum"><Link to={`/${petition.id}`}>{petition.number}</Link></td>
          <th className="district">District: </th>
          <td className="district">{petition.district}</td>
        </tr>
        <tr>
          <td colSpan="4">{petition.description}</td>
        </tr>
      </tbody>

    );
  return (
    <div>
      <button onClick={this.sortingHandler('number')}>Sort by Petition Number</button>
      <button onClick={this.sortingHandler('district')}>Sort by District</button>

      <table className="list">
        {renderPetitions}
      </table>

    </div>
  );}
};

export default PetitionList;
