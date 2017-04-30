import React from 'react';

class CreateUser extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: ""
    };
  }

  createUser(event){
    event.preventDefault()

    console.log(this.state)

    let newUser = {
      first_name: this.refs.first_name.value,
      last_name: this.refs.last_name.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
      password_confirmation: this.refs.password_confirmation.value
    }

    jQuery.ajax({
      type: "POST",
      url: "http://localhost:3000/" + this.state.id,
      data: JSON.stringify({
        user: newUser
      }),
      contentType: "application/json",
      dataType: "json"

    }).done(function( data ) {
      alert( "Data saved: " + data );
    })
    .fail(function(error) {
      console.log(error);
    });
  }

  return(
    <div>
      <form onSubmit={this.createUser.bind(this)}>

        <label className="sr-only">First name</label>
          <input
            type="text"
            className="form-control"
            ref="first_name"
            placeholder="Your first name"
            autoComplete="on"
            autoFocus={focus}
            required={true} />

        <label className="sr-only">Last name</label>
          <input type="text"
            className="form-control"
            ref="last_name"
            placeholder="Your last name"
            required={true} />

        <label className="sr-only">E-mail</label>
          <input type="email"
            className="form-control"
            ref="email"
            placeholder="Your email"
            autoComplete="on"
            required={true} />

        <label className="sr-only">Password</label>
          <input type="password"
            className="form-control"
            ref="password"
            placeholder="Your password"
            required={true} />

        <label className="sr-only">Password confirmation</label>
          <input type="password"
            className="form-control"
            ref="password_confirmation"
            placeholder="Your password confirmation"
            required={true} />

          <label className="sr-only">Submit</label>
        <button type="submit"
          className="btn btn-primary">Create account</button>

      </form>

      <table>
        <tr>
          <th>name</th>
          <th>type</th>
          <th>email</th>
        </tr>
        {users}
      </table>
    </div>
  )};
}
