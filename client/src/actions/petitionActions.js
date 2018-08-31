export function fetchPetitions () {
  return(dispatch) => {
    dispatch({type: 'LOADING_PETITIONS'});
    return fetch('http://localhost:3000/api/petitions')
    .then(response => {return response.json() })
    .then(petitions => dispatch({ type: 'FETCH_PETITIONS', payload: petitions}))
  }
}
