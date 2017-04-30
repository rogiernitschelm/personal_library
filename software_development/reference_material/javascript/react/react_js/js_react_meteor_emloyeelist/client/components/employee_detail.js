import React from 'react';

const EmployeeDetail = ({employee}) => {

  const { email, name, phone, avatar } = employee;

  return(
    <div className="thumbnail">
      <img src={avatar} />
      <div className="caption">
        <h3>{name}</h3>
      </div>
      <ul className="list-group">
        <li className="list-group-item">Email: {email}</li>
        <li className="list-group-item">Phone: {phone}</li>
      </ul>
    </div>
  );
};

export default EmployeeDetail;
