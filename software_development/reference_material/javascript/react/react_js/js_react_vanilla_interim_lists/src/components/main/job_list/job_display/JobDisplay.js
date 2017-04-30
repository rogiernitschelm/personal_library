import React from 'react';

const JobsDisplay = (props) => {

  // Display info about the job. Initially nothing is selected.

  if (props.jobForDisplay){
    return (
      <div>
        JOB DISPLAY HERE <br /><br />
        {props.jobForDisplay.job_title}
      </div>
  )} else {

    // The compiler will complain if we return nothing.

    return <div></div>
  }
}

export default JobsDisplay;
