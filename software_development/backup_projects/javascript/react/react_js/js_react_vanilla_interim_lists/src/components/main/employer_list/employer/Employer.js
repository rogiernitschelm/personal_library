import React from 'React';

const Employer = ({employer, onEmployerSelect}) => {

  // on click set itself as the selected employer (which is to be displayed)
  // on the employer display.

  return(
      <tr onClick={() => onEmployerSelect(employer)}>
        <td>
          <span>{employer.company_name}</span>
        </td>

        <td>
          <span>{employer.business}</span>
        </td>

      </tr>
  );
};

export default Employer;
