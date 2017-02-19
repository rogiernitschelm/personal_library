import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      search_term: ""
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({search_term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.search_term);
    this.setState({ search_term: ''})
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five day forecase in your favorite cities"
          className="form-control"
          value={this.state.search_term}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// container doesn't care about state, so null is first argument

export default connect(null, mapDispatchToProps)(SearchBar);
