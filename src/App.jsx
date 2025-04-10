import React from 'react';
import './App.css';
import CounterApp from './classBasedComponents/CounterApp';
import ToggleButton from './classBasedComponents/ToggleButton';
import InputForm from './classBasedComponents/InputForm';
const App = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* <CounterApp /> */}
      {/* <ToggleButton /> */}
      <InputForm />
    </div>
  );
}

export default App;


