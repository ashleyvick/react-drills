import React, {Component} from 'react';


class NewTask extends Component { 
    constructor (){
        super();
        this.state = {
            input: ''
        };
    }

    inputChange = (value) => {
        this.setState({input: value})
    }



    render(){
        return(
            <div>
                <input
                onChange={(e)=>this.inputChange(e.target.value)}
                placeholder="Enter New Task" ></input>
                <button onClick={()=>this.props.add(this.state.input)}>Add</button>
                
            </div>
        )
    }
}

export default NewTask;
;