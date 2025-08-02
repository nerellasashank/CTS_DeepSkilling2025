import React, { Component } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: '',
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
    this.setState({ message: 'Currency Convertor!!!' });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    console.log('Hello!');
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handleSyntheticEvent = (e) => {
    alert('I was clicked');
  };

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h2>React Event Handling Example</h2>

        <h3>Counter: {this.state.count}</h3>
        <button onClick={this.increment}>Increment</button>{' '}
        <button onClick={this.decrement}>Decrement</button>

        <p>{this.state.message}</p>

        <hr />

        <button onClick={() => this.sayWelcome('Welcome to Event Handling!')}>
          Say Welcome
        </button>

        <hr />

        <button onClick={this.handleSyntheticEvent}>
          Click for Synthetic Event
        </button>

        <hr />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;