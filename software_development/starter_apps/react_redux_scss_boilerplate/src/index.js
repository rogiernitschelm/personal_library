import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';

import reducers from './reducers';
import routes from './routes';


const store = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={store(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector('#render-target'));
