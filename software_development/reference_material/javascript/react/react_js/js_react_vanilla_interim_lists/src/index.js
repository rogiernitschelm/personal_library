import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Navigation from './components/navigation/Navigation';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import FakeDataClass from './FakeDataClass' // THIS IMPORTS A FAKE DATA CLASS

class App extends Component {
  constructor() {
    super();

    this.state = {
      dataTypes: []
      ,users: []
      ,freelancers: []
      ,employers: []
      ,jobs: []
    };
  }


  // Ajax get-request

  getDataFromDatabase(dataType) {
    return Promise.resolve($.get({
      url:`http://localhost:3000/${dataType}.json`
    }));
  }






  //
  // THIS CREATES FAKE INFO AND WILL BE REMOVED IN THE FUTURE!!!!
  //

  createFakeInformation(){
    let arraySeeds = []
    for (let i = 0; i < 25; i++){
      arraySeeds.push(new FakeDataClass())
    }
    return arraySeeds
  }

  //
  // END OF FAKE DATA CREATION
  //

  // set the dataTypes to use before cDM's loop runs.







  componentWillMount() {

    this.setState({
      dataTypes: ["employers, freelancers, jobs"]
    });

    //
    // THIS IS FAKE DATA
    //

    this.setState({
      employers: this.createFakeInformation()
      ,jobs: this.createFakeInformation()
      ,freelancers: this.createFakeInformation()
    })

    //
    // END OF FAKE DATA
    //
  }

  // On mount loop through all data types and call getDataFromDatabase for each

  componentDidMount() {
    const DATA_TYPES = this.state.dataTypes

    DATA_TYPES.map( dataType => this.getDataFromDatabase(dataType) );

    this.setState({
      freelancers: this.state.freelancers
      ,employers: this.state.employers
      ,jobs: this.state.jobs
    });
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Main freelancers={this.state.freelancers} employers={this.state.employers} jobs={this.state.jobs} />
        <Footer />
      </div>
    );
  };
}

ReactDOM.render(<App />, document.querySelector('.application-container'));
