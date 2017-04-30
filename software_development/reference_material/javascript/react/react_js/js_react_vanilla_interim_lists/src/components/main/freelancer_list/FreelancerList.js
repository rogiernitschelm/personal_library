import React, { Component } from 'react';
import Freelancer from './freelancer/Freelancer';
import FreelancerDisplay from './freelancer_display/FreelancerDisplay'

class FreelancerList extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedFreelancer: null
    };
  }

  render(){
    const FREELANCERS = this.props.freelancers.map((freelancer) => {

      // every freelancer can be rendered in the display. We pass the ability
      // to set itself as the selected freelancer to the Freelancer-component.

      return (<Freelancer
        onFreelancerSelect={selectedFreelancer => this.setState({selectedFreelancer}) }
        key={`freelancer-${freelancer.id}`}
        freelancer={freelancer}
        />)
      });

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-box no-header clearfix">

            {/*this is the display in which a selected freelancer gets
              rendered */}

            <FreelancerDisplay freelancerForDisplay={this.state.selectedFreelancer} />

              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th><span>Freelancer</span></th>
                      <th><span>Profession</span></th>
                      <th><span>Business</span></th>
                      <th><span>Field</span></th>
                      <th><span>Available</span></th>
                    </tr>
                  </thead>
                  <tbody>

                  {/*here our list of freelancers gets rendered as a table */}

                  {FREELANCERS}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )};
}

export default FreelancerList;
