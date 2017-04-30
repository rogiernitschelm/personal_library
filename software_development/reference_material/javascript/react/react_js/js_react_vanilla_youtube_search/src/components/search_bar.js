import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // set the initial state

    this.state = { term: '' };

  }

  render() {

    // set the state on the change of the input value in the search bar.

    return(
      <div className="search-bar">
        <input
          value={this.state.term} // the state change, changes the value
          onChange={event => this.onInputChange(event.target.value)} />;
      </div>

    );
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
