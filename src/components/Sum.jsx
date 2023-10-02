import React, { Component } from 'react';

class SumComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 0,
      value2: 0,
      sum: 0,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: Number(value),
      },
      this.calculateSum
    );
  };

  calculateSum = () => {
    this.setState((prevState) => ({
      sum: prevState.value1 + prevState.value2,
    }));
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.value1 !== this.state.value1 ||
      nextState.value2 !== this.state.value2
    );
  }

  render() {
    return (
      <div className='sum-container'>
        <input
          type="number"
          name="value1"
          value={this.state.value1}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="value2"
          value={this.state.value2}
          onChange={this.handleChange}
        />
        <p>
          Sum: {this.state.sum}
        </p>
      </div>
    );
  }
}

export default SumComponent;
