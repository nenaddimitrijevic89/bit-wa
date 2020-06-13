import React from 'react';
import './App.css';
import { Input } from './Components/Input/Input';
import { Password } from './Components/Password/Password';
import { Btn } from './Components/Button/Button';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      password: ""
    }
  }

  getInput = (text) => {
    this.setState({ input: text })
  }
  getPassword = (text) => {
    this.setState({ password: text })
  }
  submit = () => {
    alert(`name: ${this.state.input}, password: ${this.state.password}`);
    this.resetValue()
  }
  resetValue = () => {
    this.setState({ input: "" })
    this.setState({ password: "" })
  }

  render() {
    return (
      <div>
        <Input getInput={this.getInput} value={this.state.input} />
        <Password getPassword={this.getPassword} value={this.state.password} />
        <Btn cb={this.submit} name="Submit" />
        <Btn cb={this.resetValue} name="Reset" />
      </div >
    );
  }
}

export default App;
