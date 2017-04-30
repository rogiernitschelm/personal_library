import React, { Component } from 'react';
import Footer from './footer/footer';
import Header from './header/header';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Header />
        </div>
        <div className="ruler"></div>
        <div className="container">
          {this.props.children}
        </div>
        <div className="container">
          <Footer/>
        </div>
      </div>
    );
  }
}
