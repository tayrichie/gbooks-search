import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPage } from '../actions/paginationActions';

class Pagination extends Component {

  constructor(props){
    super(props);

    this.switchPage = this.switchPage.bind(this);
  }

  switchPage(e){

    dispatchEvent(setPage);
  }

  render() {
    
    const itemsPerPage = this.props.itemsPerPage;
    let totalPages = this.props.resultsCount / itemsPerPage;

    let pagesArray = [];
    for(var i=0; i<totalPages; i++){
      pagesArray.push(i+1);
    }

    return (
      <ul className="pagination">
        {pagesArray.map((page, index) => 
          <li key={index}><button type="button" value={page}>{page}</button></li>
        )}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  currentPage: state.currentPage,
  itemsPerPage: state.itemsPerPage
});


const mapDispatchToProps = {
  setPage
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
