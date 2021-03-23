import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters';

class App extends Component {
  state = { 
    total: 0,
    counters: [
        {id: 0, count: 0},
    ] 
  }

  constructor() {
    super();
    console.log('Mount > App - Constructor.');
  }

  componentDidMount() {
    console.log('Mount > App- componentDidMount.');
  }

  handleDelete = (counterId) => {
      let count = 0;
      this.state.counters.forEach(counter => {
          if (counter.id !== counterId){
              count += counter.count;
          }
      })
      const newCounters = this.state.counters.filter(counter => counter.id !== counterId);
      this.setState({ total: count, counters: newCounters });
  }

  handleAdd = () => {
      let newId = 0;
      if (this.state.counters.length > 0) {
          newId = this.state.counters[this.state.counters.length - 1].id + 1; 
      }
      const newCounters = {id: newId, count: 0}
      this.setState({total: this.state.total, counters: [...this.state.counters, newCounters]})
  }

  handleReset = () => {
      const newCounters = this.state.counters.map(counter => {
          counter.count = 0;
          return counter;
      });
      this.setState({total: 0,  counters: newCounters });
  }

  handleIncrement = (counterId) => {
      const newCounters = this.state.counters.map(counter => {
          if(counterId === counter.id)
              counter.count++;
          return counter;
      });
      this.setState({ total: this.state.total + 1, counters: newCounters });
  }

  handleDecrement = (counterId) => {
      let isGreaterThan0 = false;
      const newCounters = this.state.counters.map(counter => {
          if(counterId === counter.id && counter.count > 0){
              counter.count--;
              isGreaterThan0 = true;
          }
          return counter;
      });
      if(isGreaterThan0){
          this.setState({ total: this.state.total - 1, counters: newCounters });
      }
  }

  render() {
    console.log('Mount > App - Render.');
    return (
      <React.Fragment>
        <NavBar total = {this.state.total}/>
        <main className= "container">
          <Counters 
            onAdd = {this.handleAdd}
            onDelete = {this.handleDelete}
            onReset = {this.handleReset}
            onIncrement = {this.handleIncrement}
            onDecrement = {this.handleDecrement}
            counters = {this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
