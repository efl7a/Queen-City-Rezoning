export function fetchComments () {
  return(dispatch) => {
    dispatch({type: 'LOADING_COMMENTS'});
    return fetch(`/api/comments`)
    .then(response => {return response.json() })
    .then(comments => dispatch({ type: 'FETCH_COMMENTS', payload: comments}))
  }
}

export function addComment (formData) {
  return(dispatch) => {
    dispatch({type: "ADDING_COMMENTS"});
    return fetch('api/comments', {
      method: 'post',
      body: formData
    }).then(response => {return response.json() })
    .then(comments => dispatch({ type: 'FETCH_COMMENTS', payload: comments}))
  }
}
