import React from 'react';

const EmployerDisplay = (props) => {

  // Display info about the employer. Initially nothing is selected.

  if (props.employerForDisplay){
    return (
      <div>
      THIS IS THE EMPLOYER DISPLAY<br /><br /><br /><br />
        {props.employerForDisplay.email}
      </div>
  )} else {

    // The compiler will complain if we return nothing.

    return <div></div>
  }
}

export default EmployerDisplay;
