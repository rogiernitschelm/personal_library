import React, { Component } from 'react';
import Employer from './employer/Employer';
import EmployerDisplay from './employer_display/EmployerDisplay';

class EmployerList extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedEmployer: null
    }
  }

  render(){
    const EMPLOYERS = this.props.employers.map((employer) => {
      return (<Employer
        onEmployerSelect={selectedEmployer => this.setState({selectedEmployer})}
        key={`employer-${employer.id}`}
        employer={employer} />)
    });

    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-box no-header clearfix">

            {/*this is the display in which a selected employer gets
              rendered */}

            <EmployerDisplay employerForDisplay={this.state.selectedEmployer} />

            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th><span>Employer</span></th>
                    <th><span>Business</span></th>
                  </tr>
                </thead>
                <tbody>

                {/*here our list of employers gets rendered as a table */}

                {EMPLOYERS}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )};
}

export default EmployerList;
