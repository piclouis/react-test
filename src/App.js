import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Counters from './components/Counters/Counters';


class App extends Component {
  state = { 
    counters: [
      { id:1 , value: 0},
      { id:2 , value: 0},
      { id:3 , value: 0},
      { id:4 , value: 0},
      { id:5 , value: 0},
      { id:6 , value: 0},
      { id:7 , value: 0},
      { id:8 , value: 0}
    ]
  };

  handleIncrement = counterId => {
    const counters = this.state.counters.map(c => {
      if (c.id === counterId) {
        ++c.value;
      }
      return c;
    });
    this.setState({counters});
  }

  handleDecrement = counterId => {
    const counters = this.state.counters.map(c => {
      if (c.id === counterId && c.value > 0) {
        --c.value;
      }
      return c;
    });

    this.setState({counters});
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0
      return c;
    });

    this.setState({counters});
  }

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
