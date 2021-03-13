import React, {Component} from 'react';
import List from './List'
import NewTask from './NewTask'
import ToDo from './ToDo'


class App extends Component { 
    constructor (){
        super();
        this.state = {
          list: [],
        };
    }

    addTask = (value) => {
      this.setState({list: [...this.state.list, value]})
    }

    render(){
        return(
            <div>
              <h1>My To-Do List:</h1>
              <NewTask add={this.addTask}/>
              < List  list={this.state.list}/>

                
            </div>
        )
    }
}

export default App;
;
