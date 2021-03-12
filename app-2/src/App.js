import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      lotr: ['Aragorn', 'Samwise', 'Gandolf', 'Pippin', 'Merry', 'Legolas', 'Gimli', 'Frodo', 'Boromir']
    };
  }

  render (){
    return(
      <div>
        <h2>Favorite Fellowship Characters in Order</h2>
        <ul>{this.state.lotr.map((element) => {
          return <ul>{element}</ul>
        })}</ul>

      </div>

    );
  }
}

export default App;
