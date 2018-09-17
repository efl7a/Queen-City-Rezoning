export function fetchPetitions () {
  return(dispatch) => {
    dispatch({ type: 'LOADING_PETITIONS' });
    return fetch('/api/petitions')
    .then(response => { return response.json() })
    .then(petitions => dispatch({ type: 'FETCH_PETITIONS', payload: petitions}))
  }
}

export function searchPetitions (searchTerm) {
  console.log(`/api/petitions/?search=${searchTerm}`)
  return(dispatch) => {
    dispatch({ type: 'SEARCHING_PETITIONS' });
    return fetch(`/api/petitions/?search=${searchTerm}`)
    .then(response => { return response.json() })
    .then(petitions => dispatch({ type: 'FETCH_PETITIONS', payload: petitions }))
  }
}

// export function petitionByDistrict (districtId) {
//   return(dispatch) => {
//     dispatch({ type: 'LOADING_DISTRICT_PETITIONS' });
//     return fetch(`/api/petitions?district=${districtId}`)
//     .then(response => { return response.json() })
//     .then(petitions => dispatch({ type: 'FETCH_PETITIONS', payload: petitions }))
//   }
// }
