export function fetchPetitions (sortBy="number") {

  let p = new URLSearchParams();
  p.append("sort", sortBy)

  return(dispatch) => {
    dispatch({type: 'LOADING_PETITIONS'});
    return fetch('/api/petitions?' + p, {
      method: "GET",
    })
    .then(response => {return response.json() })
    .then(petitions => dispatch({ type: 'FETCH_PETITIONS', payload: petitions}))
  }
}
