import React from 'react';

const Job = ({job, onJobSelect}) => {

  // on click set itself as the selected job(which is to be dispolayed)
  // on the job display.

  return(

    // This is the job information rendered in the job list.

      <tr onClick={() => onJobSelect(job)}>
        <td>
          <span>{job.job_title}</span>
        </td>

        <td>
          <span>{job.company_name}</span>
        </td>

        <td>
          <span>{job.location}</span>
        </td>

        <td>
          <span>1-1-2018</span>
        </td>
      </tr>
  );
};

export default Job;
