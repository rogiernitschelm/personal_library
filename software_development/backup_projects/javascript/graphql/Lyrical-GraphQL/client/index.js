import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import './style/style.css';
import App from './components/app';
import SongList from './components/song_list';
import SongCreate from './components/song_create';
import SongDetail from './components/song_detail';

// Take all pieces of data from the backend, and run it through this function.
// The result of this function identifies the data inside the apollo client.

const client = new ApolloClient({
  dataIdFromObject: object => object.id,

});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="/songs/new" component={SongCreate} />
          <Route path="/songs/:id" component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
