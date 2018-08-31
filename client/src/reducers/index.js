import { combineReducers } from 'redux';
import petitionsReducer from './petitionsReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
  petitions: petitionsReducer,
  comments: commentsReducer
});
