import React, { Component } from 'react';


class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
          loggedout : true
        }
      }

      handleLogout = () => {
        let logout = this.state.loggedout;
        if(logout){
            this.props.history.push("/");
        }
    }

    render() {
        return (
        <div className="container">
            <p>Login Page</p>
            <button className="btn btn-danger" onClick={() => this.handleLogout()}>Logout</button>
        </div>
        );
    }
    }

export default Login;
