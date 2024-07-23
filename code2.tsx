import React, { Component } from 'react';

// 1. Définir une interface pour les props (vide dans ce cas, mais ajoutée pour la complétude)
interface CounterProps {}

// 2. Définir une interface pour le state
interface CounterState {
  count: number;
}

// 3. Utiliser les interfaces dans le composant
class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
