import React, { Component } from 'react';
import './pagination.scss';
class Pagination extends Component {
  render() { 
    const { pagination, onNextPage, onPreviousPage } = this.props;
    return (
      <div className="pagination">
        <button className="btn btn-sm m-2"
          onClick={onPreviousPage}
          disabled={pagination.currentPage <= 1}
        >
          &lt;&lt;
        </button>
        <span>{pagination.currentPage}</span>
        <button className="btn btn-sm m-2"
          onClick={onNextPage}
          disabled={pagination.currentPage >= (pagination.totalPages)}
        >
          &gt;&gt;
        </button>
      </div>
    );
  }
}
 
export default Pagination;