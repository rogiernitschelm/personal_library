// axios doesn't support jsonp, hence I use jQuery.

import $ from 'jquery';

export const FETCH_NEWS = 'FETCH_NEWS';
export const FETCH_STOCKS = 'FETCH_STOCKS';

export function fetchNews(stock){
  const KEY = "ec1a22770c22be74ab876252e4687dc1"
  const REQUEST = $.ajax({
    url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${KEY}&q=${stock}+corporate`,
    dataType: 'json'
  }).then(data => {
    return data
  });
  return {
    type: FETCH_NEWS,
    payload: REQUEST
  };
}

export function fetchStock(stock){
  const REQUEST = $.ajax({
    url: `http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?Input=${stock}`,
    dataType: 'jsonp'
  })

  .then(firstData => {
    return $.ajax({
      url: `http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?Symbol=${firstData[0].Symbol}`,
      dataType: 'jsonp'
    })

  .then(secondData => {
      return secondData;
    })
  });

  return {
    type: FETCH_STOCKS,
    payload: REQUEST
  };
}
