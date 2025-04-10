import React, { Component } from 'react';

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };
  }

  toggle = () => {
    this.setState((prevState) => ({ isOn: !prevState.isOn }));
  };

  render() {
    return (
      <button onClick={this.toggle}>{this.state.isOn ? 'Turn On' : 'Turn Off'}</button>
    );
  }
}

export default ToggleButton;

