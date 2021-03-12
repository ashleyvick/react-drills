import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lotr: ['Aragorn', 'Samwise', 'Gandolf', 'Pippin', 'Merry', 'Legolas', 'Gimli', 'Frodo', 'Boromir'],
      filteredItems: ""
    };
  }

  filterText = (value) => {
    this.setState({filteredItems: value});
  }


  render (){
    const filteredLOTR = this.state.lotr.filter((element)=> {
    return element.includes(this.state.filteredItems)})

    return (
      <div>
        <h2>Favorite Fellowship Characters in Order</h2>
        <input onChange={(e)=> this.filterText(e.target.value)}></input>
        <h3>{filteredLOTR.map((element)=> <ul>{element}</ul>)} </h3>
        

      </div>
    );
  }
}

export default App;
