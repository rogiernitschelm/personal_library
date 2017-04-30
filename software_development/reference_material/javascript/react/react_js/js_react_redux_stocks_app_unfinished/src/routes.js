import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Landing from './components/landing/landing';
import Stocks from './components/stocks/stocks';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/stocks" component={Stocks} />
  </Route>
);
