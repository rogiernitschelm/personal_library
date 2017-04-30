import React from 'react';

const FreelancerDisplay = (props) => {

  // Display info about the freelancer. Initially nothing is selected.

  if (props.freelancerForDisplay){
    return (
      <div>
      THIS IS THE FREELANCER DISPLAY<br /><br />
        {props.freelancerForDisplay.email}
      </div>
  )} else {

    // The compiler will complain if we return nothing.

    return <div></div>
  }
}

export default FreelancerDisplay;
