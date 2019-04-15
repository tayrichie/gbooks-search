import { SEARCH_AUTHOR } from './types';
import request from 'request';

export function searchAuthor(query){
  let searchQuery = `https://www.googleapis.com/books/v1/volumes?q=${query.searchQuery}&key=${query.key}&maxResults=40`;

  let respTime = 0;
  request({
    uri: searchQuery,
    method: 'GET',
    time: true
  }, (err, resp) => {
    if(err){
      console.log(err);
    } else {
      respTime = resp.timings.response/1000;
    }
  })

  return function(dispatch){
    fetch(searchQuery, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        return dispatch({
            type: SEARCH_AUTHOR,
            payload: {
              results: data.items,
              responseTime: respTime
            }
        })
      });
  }
}
