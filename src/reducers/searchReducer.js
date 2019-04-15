import { SEARCH_AUTHOR, SET_PAGE } from '../actions/types';

const initialState = {
  results: [],
  responseTime: 0,
}

export default function(state = initialState, action){
  switch(action.type){
    case SEARCH_AUTHOR:
      return {
        ...state,
        results: action.payload.results,
        responseTime: action.payload.responseTime
      };
    default:
      return state;
  }
}