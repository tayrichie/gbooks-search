import { SET_PAGE } from '../actions/types';

const initialPaginationState = {
  currentPage: 1,
  pageSet: 0,
  itemsPerPage: 10
}

export default function(state = initialPaginationState, action){
  switch(action.type){
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload.currentPage,
      };
    default:
      return state;
  }
}