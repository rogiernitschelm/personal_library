import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './router';

class App extends Component {
  componentWillMount() {
      const config = {
      apiKey: "AIzaSyACGq4Wu-h52llIGH_XF_HoNAv3japxg3M",
      authDomain: "manager-1d4f8.firebaseapp.com",
      databaseURL: "https://manager-1d4f8.firebaseio.com",
      storageBucket: "manager-1d4f8.appspot.com",
      messagingSenderId: "767882719410"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
