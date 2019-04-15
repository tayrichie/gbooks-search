import React, { Component } from 'react'

export default class Book extends Component {
  render() {

    return (
      <li>
        <strong>Author:</strong> {this.props.authors ? this.props.authors.map(author => author) : "No author recorded"}<br/>
        <strong>Title:</strong> {this.props.title}<br/>
        <small><strong>Publication Dates:</strong> {this.props.date}</small>
      </li>
    )
  }
}
