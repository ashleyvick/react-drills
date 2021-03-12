import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        };
    }

    handleName = (val) => {
        this.setState({username:val})
    }

    handlePass = (val) => {
        this.setState({password:val})
    }

    handleLogin = (val) => {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }



    render(){
        return(
            <div>
                <input onChange={(e) => this.handleName(e.target.value)} type="text"/>
                <input onChange={(e) => this.handlePass(e.target.value)} type="text"/>
                <button onClick={this.handleLogin} >Login</button>

            </div>
        )
    }
}

export default Login