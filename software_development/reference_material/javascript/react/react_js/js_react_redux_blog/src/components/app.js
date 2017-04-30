import React, { Component } from 'react';


export default class App extends Component {
  render() {
    return (
      <div>
      blabla
        {this.props.children}
      </div>
    );
  }
}
