export function fetchComments (petitionId) {
  return(dispatch) => {
    dispatch({type: 'LOADING_COMMENTS'});
    return fetch(`/api/petitions/${petitionId}/comments`)
    .then(response => {return response.json() })
    .then(commentss => dispatch({ type: 'FETCH_COMMENTS', payload: commentss}))
  }
}
