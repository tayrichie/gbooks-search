import { SET_PAGE } from './types';

export function setPage(page){
  return {
    type: SET_PAGE,
    payload: {
      currentPage: page
    }
  }
}
