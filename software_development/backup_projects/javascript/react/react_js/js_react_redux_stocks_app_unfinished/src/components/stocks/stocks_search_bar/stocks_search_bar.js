import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStock, fetchNews } from '../../../actions/index';
import { bindActionCreators } from 'redux';

class StocksSearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({
      searchTerm: event.target.value
    });
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchStock(this.state.searchTerm);
    this.props.fetchNews(this.state.searchTerm);
    this.setState({ searchTerm: '' })
  }

  render(){
    return(
      <div className="search-bar-stocks">
        <form onSubmit={this.onFormSubmit} className="input-group search-field">
          <input
          placeholder="Enter a stock here... Like Google, Amazon or Microsoft."
          className="form-control search-input"
          value={this.state.searchTerm}
          onChange={this.onInputChange}
          autoFocus
           />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary btn-search">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStock, fetchNews }, dispatch);
}

export default connect(null, mapDispatchToProps)(StocksSearchBar);
