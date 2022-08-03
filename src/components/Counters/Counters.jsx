import React, { Component } from 'react';
import Counter from '../Counter/Counter';
import Pagination from '../Pagination/Pagination';
import './counters.scss';

class Counters extends Component {
  state = {}

  constructor(props) {
    super(props);

    const nbItemsPerPage = 3;
    const totalPages = Math.ceil(props.counters.length / nbItemsPerPage);

    this.state.pagination = {
      currentPage: 1,
      totalPages : totalPages,
      nbItemsPerPage: nbItemsPerPage
    }

  }

  handleNextPage = () => {
    let pagination = this.state.pagination;
    if (pagination.currentPage < pagination.totalPages) {
      ++pagination.currentPage;
      this.setState({pagination});
    }
  }

  handlePreviousPage = () => {
    let pagination = this.state.pagination;
    if (pagination.currentPage > 0) {
      --pagination.currentPage;
      this.setState({pagination});
    }
  }

  isCounterInCurrentPage = (index) => {
    const { pagination } = this.state;
    const highestItem = pagination.currentPage * pagination.nbItemsPerPage;
    const lowestItem = highestItem - pagination.nbItemsPerPage + 1;

    return index >= lowestItem - 1 && index <= highestItem - 1;
  }
  
  render() { 
    const { onReset, onDelete, onIncrement, onDecrement, counters } = this.props;
    return (
      <div className="counters">
        <button
          onClick={onReset}
          className="btn btn-sm m-2"
        >
          Reset 
        </button>
        {counters.map( (counter, index) => {
          if (this.isCounterInCurrentPage(index)) {
            return (
              <Counter 
                key={counter.id} 
                onDelete={onDelete} 
                onIncrement={onIncrement} 
                onDecrement={onDecrement} 
                counter={counter}
              />
            );
          }
        })}
        <Pagination 
          pagination={this.state.pagination}
          onNextPage={this.handleNextPage}
          onPreviousPage={this.handlePreviousPage}
        />
      </div>
    );
  }
}
 
export default Counters;