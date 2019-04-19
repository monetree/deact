import React, { Component } from 'react';

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      logged_in : true
    }
  }

  HandleLogin =() => {
    let authenticated = this.state.logged_in;
    if(authenticated){
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Home Page</h1>
        <button className="btn btn-danger" onClick={() => this.HandleLogin()}>
          Login
        </button>
      </div>
    );
  }
}

export default Home;
