import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './components/employee_list';

const App = () => {
  return (
    <div>
      <EmployeeList />
    </div>
  );
};

// after Meteor loads in the browser, render app to the DOM

Meteor.startup(() => {
  // React render call
  ReactDOM.render(<App />, document.querySelector(".container"));

});
