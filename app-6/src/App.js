import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './ToDo'

class App extends Component{
  constructor(){
    super();
    this.state = {
      list: [],
      input: ''
    }
  }

  inputChange = (value) => {
    this.setState({input: value})
  }

  addTask = (value) => {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    });
  }


  render(){
    const list = this.state.list.map((element) => {
      return <ul>{element}</ul>
    })
    return(
      <div>
        <h2>My to-do list:</h2>
        <input
        onChange={(e)=>this.inputChange(e.target.value)}
        placeholder="Enter New Task" ></input>
        <button onClick={this.addTask}>Add</button>
        <br/>
        {list}

      </div>
    )
  }
}

export default App;
