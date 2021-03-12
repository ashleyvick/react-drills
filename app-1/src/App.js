import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  updateText = (value) => {
    this.setState({text: value});
  }

  render () {
    return (
      <div className="App">
        <input onChange={e => this.updateText(e.target.value)} type="text"/>
        <h1>{this.state.text}</h1>
  
      </div>
    );
  }
}


export default App;
