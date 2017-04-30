import React from 'react';

const Freelancer = ({freelancer, onFreelancerSelect}) => {

  // on click set itself as the selected freelancer(which is to be displayed)
  // on the freelancer display.

  return(

    // This is the freelancer information rendered in the freelancer list.

      <tr onClick={() => onFreelancerSelect(freelancer)}>
        <td>
          <span>{freelancer.first_name}</span>
        </td>

        <td>
          <span>{freelancer.job_title}</span>
        </td>

        <td>
          <span>{freelancer.business}</span>
        </td>

        <td>
          <span>{freelancer.field}</span>
        </td>

        <td>
          <span>{freelancer.availability}</span>
        </td>
      </tr>
  );
};

export default Freelancer;
