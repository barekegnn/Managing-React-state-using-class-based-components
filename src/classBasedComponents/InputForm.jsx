import React, { Component } from 'react';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '', // store user input
    };
  }

  handleChange = (event) => {
    this.setState({
      inputText: event.target.value, // update state as user types
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Type something..."
          value={this.state.inputText}
          onChange={this.handleChange}
        />
        <p>You typed: {this.state.inputText}</p>
      </div>
    );
  }
}

export default InputForm;
