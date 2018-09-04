export default (state = [], action) => {
  switch (action.type) {

    case 'LOADING_COMMENTS':
    console.log("loading")
      return state;

    case 'FETCH_COMMENTS':
      console.log("fetching")
      return action.payload;

    case 'ADDING_COMMENTS':
    console.log(action.payload)
      return state;

    case 'POST_FAILED':
      return state;

    default:
      return state;
  }
};
