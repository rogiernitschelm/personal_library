import React, { Component } from 'react';
// import _ from 'lodash'; commented out code is meant for search function and lodash

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search_term: ''
    };
  }

  search(search_term) {
    // search function comes here
  }

  onInputChange(search_term) {
    this.setState({search_term});
    // this.search(search_term)
  }

  render() {

    // debounce takes a function and returns a function that can only be called once in a x ms
    //const SEARCH = _.debounce{(search_term) => {this.search(search_term) }, 300};

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="search-bar">
              <input
                value={this.state.search_term}
                onChange={(event) => this.onInputChange(event.target.value)}
                placeholder="search here!" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
