import React, { Component } from 'react'
import { connect } from 'react-redux';
import Book from './Book';
import ResultsInfo from './ResultsInfo';
import Pagination from './Pagination';

class SearchResults extends Component {
  render() {
    let allResults = this.props.results.results;
    let returnedResults = allResults.slice(0, 10);
    let resultItems;

    if(allResults.length > 0) {
      resultItems = returnedResults.map((book, index) => (
        <Book key={index} authors={book.volumeInfo.authors} title={book.volumeInfo.title} date={book.volumeInfo.publishedDate} />
      ));
    } else {
      resultItems = (<li>Sorry, there are no results.</li>);
    }

    return (
      <div className="results-container">
        {resultItems.length ? 
          <ResultsInfo results={returnedResults} resultsCount={allResults.length} responseTime={this.props.results.responseTime}/> : null}

        {resultItems.length ? 
          <ul className="results-list">
            {resultItems}
          </ul>
          : null
        }
        
        {resultItems.length ? 
          <Pagination itemsPerPage={this.props.itemsPerPage} resultsCount={allResults.length}/>
          : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  results: state.results,
  responseTime: state.responseTime,
});

export default connect(mapStateToProps, null)(SearchResults);
