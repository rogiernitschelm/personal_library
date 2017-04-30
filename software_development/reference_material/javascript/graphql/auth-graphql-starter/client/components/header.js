import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import logout from './mutations/logout';
import query from './queries/current_user';

class Header extends Component {
  componentWillMount() {

  }

  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query }], 
    });
  }

  renderButtons() {
    const { loading, currentUser } = this.props.data;

    if (loading) { return; }
    if (currentUser) {
      return (
        <li>
          <a onClick={this.onLogoutClick.bind(this)}>logout</a>
        </li>
      );
    }

    return (
      <div>
        <li>
          <Link to="/login">Log in</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      </div>
    );
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}


export default graphql(query)(
  graphql(logout)(Header)
);
