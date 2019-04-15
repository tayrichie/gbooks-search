import React, { Component } from 'react'

export default class ResultsInfo extends Component {
  constructor(props){
    super(props);

    this.findCommonAuthor = this.findCommonAuthor.bind(this);
  }

  findCommonAuthor(results){
    let resultsAuthors = results.map(result => result.volumeInfo.authors);
    let allResults = [].concat(...resultsAuthors);

    let commonAuthor = allResults.sort((a,b) =>
    allResults.filter(v => v===a).length
    - allResults.filter(v => v===b).length
  ).pop();

    if(commonAuthor === undefined) {
      commonAuthor = "no author recorded";
    }

    return commonAuthor;
  }

  render() {
    let commonAuthor = this.findCommonAuthor(this.props.results);

    return (
      <aside className="results-info">
        <strong>Total Results: </strong> {this.props.resultsCount}
        <br/>
        <strong>Common Author: </strong> {commonAuthor}
        <br/>
        <em>returned in</em> <strong>{this.props.responseTime === undefined ? 0 : this.props.responseTime} seconds</strong>
      </aside>
    )
  }
}
