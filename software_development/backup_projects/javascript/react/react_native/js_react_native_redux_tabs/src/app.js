import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { Header } from './components/common';
import reducers from './reducers';
import LibraryList from './components/library_list';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <LibraryList />
        <Header headerText="Tech stack"/>
      </View>
    </Provider>
  );
};

export default App;
