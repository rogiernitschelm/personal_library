import React, { Component } from 'react';
import Job from './job/Job';
import JobDisplay from './job_display/JobDisplay'

class JobList extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedJob: null
    };
  }

  render(){
    const JOBS = this.props.jobs.map((job) => {

      // every job can be rendered in the display. We pass the ability
      // to set itself as the selected job to the Job-component.

      return (<Job
        onJobSelect={selectedJob => this.setState({selectedJob}) }
        key={`job-${job.id}`}
        job={job}
        />)
      });

      return (
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-box no-header clearfix">

              {/*this is the display in which a selected job gets
                rendered */}

              <JobDisplay jobForDisplay={this.state.selectedJob} />

                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th><span>Job title</span></th>
                        <th><span>Company</span></th>
                        <th><span>Location</span></th>
                        <th><span>Date</span></th>
                      </tr>
                    </thead>
                    <tbody>

                    {/*here our list of jobs gets rendered as a table */}

                    {JOBS}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )};
  }

export default JobList;
