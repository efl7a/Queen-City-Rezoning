export function fetchComments () {
  return(dispatch) => {
    dispatch({type: 'LOADING_COMMENTS'});
    return fetch(`/api/comments`)
    .then(response => {return response.json() })
    .then(comments => dispatch({ type: 'FETCH_COMMENTS', payload: comments}))
  }
}

export function addComment (content, petitionId) {
  const comment = { content: content, petition_id: petitionId }

  return (dispatch) => {
    dispatch({ type: "ADDING_COMMENTS", payload: comment });
    return fetch('api/comments', {
      method: 'post',
      headers: { "Content-Type": "application/json" },
      data: { comment: { content: content, petition_id: petitionId } }
    }).then(response => response.json())
        .then(comments => dispatch({ type: 'FETCH_COMMENTS', payload: comments}))
  }
}
