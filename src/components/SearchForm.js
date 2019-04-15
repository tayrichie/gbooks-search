import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchAuthor } from '../actions/searchActions';
import {setPage} from '../actions/paginationActions';

class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      apiKey: 'AIzaSyDDGBpdHwDPOvh_k7rrt8c2FQUFFSvwUq4',
      searchQuery: ''
    }

    this.onChange= this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();

    const enteredQuery = {
      key: this.state.apiKey,
      searchQuery: this.state.searchQuery
    }

    this.props.searchAuthor(enteredQuery);
  }

  render() {
    return (
      <div className="search-container">
        <form onSubmit={this.onSubmit} className="search-form">
          <label htmlFor="searchQuery" className="search-label"><h1>Search For a Title</h1></label>
          <input type="text" onChange={this.onChange} placeholder="Enter Book Title" id="searchQuery" name="searchQuery" className="search-field" value={this.state.searchQuery}></input>
          <button type="submit" id="bookQuerySubmit" className="search-submit">Search</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  results: state.results,
  responseTime: state.responseTime,
  itemsPerPage: state.itemsPerPage
})

const mapDispatchToProps = {
  searchAuthor,
  setPage
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
