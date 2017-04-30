import React from 'react';
import jQuery from 'jquery';
import User from './User';

class UserList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    jQuery.get("http://localhost:3000/users.json", (function(data){
      this.setState({
        users: data,
      });
    }).bind(this));
  }

  render() {
    let users = this.state.users.map(function(user) {
      return(
        <tr>
          <td>{user.id}</td>
          <td>{user.last_name}, {user.first_name}</td>
          <td>{user.email}</td>
        </tr>)
    });

    return(
      <div>
        <table>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
          {users}
        </table>
      </div>
    )};
};

export default UserList;
