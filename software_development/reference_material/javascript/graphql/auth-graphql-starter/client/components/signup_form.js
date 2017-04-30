import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';
import AuthForm from './auth_form';
import mutation from './mutations/signup';
import query from './queries/current_user';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
  }

  componentWillMount() {
    if (this.props.data.currentUser) {
      hashHistory.push('/dashboard');
    }
  }

  componentWillUpdate(nextProps) {
    if (!this.props.data.currentUser && nextProps.data.currentUser) {
      hashHistory.push('/dashboard');
    }
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    }).catch(response => {
      // promise resolves before fetchqueries is completed, so no .then to redirect
      const errors = response.graphQLErrors.map(error => error.message);
      this.setState({ errors });
    });
  }

  render() {
    return (
      <div>
        <h3>Sign up</h3>
        <AuthForm onSubmit={this.onSubmit.bind(this)} errors={this.state.errors} />
      </div>
    );
  }
}

export default graphql(mutation)(
  graphql(query)(SignupForm)
);
