import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import pagiantionReducer from './paginationReducer';

export default combineReducers({
  results: searchReducer,
  pagination: pagiantionReducer
});