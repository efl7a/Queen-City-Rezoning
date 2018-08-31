export default (state = [], action) => {
  switch (action.type) {

    case 'LOADING_PETITIONS':
    console.log("loading")
      return state;

    case 'FETCH_COMMENTS':
      console.log("fetching")
      return action.payload;

    default:
      return state;
  }
};
