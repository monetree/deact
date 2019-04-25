import React, { Component } from 'react';
import FormatUrl from 'utils/UrlFormatter.jsx'
import Two from 'components/Two.jsx'
import One from 'components/One.jsx'
import Three from '../../components/Three';

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      logged_in : true,
    }
    this.one = React.createRef();
    this.three = React.createRef();
  }

  componentDidMount() {
    let url = FormatUrl(`/user/`)
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
  }

  HandleLogin = () => {
    let authenticated = this.state.logged_in;
    if(authenticated){
      this.props.history.push("/login");
    }
  }

  HandleRedirect = () => {
    window.location = "/login"
  }

  getData = (data) => {
    this.one.current.finalClick(data);
    this.three.current.finalClick(data);
  }

  render() {
    return (
        <div className="container">
          <h1>Home Page</h1>
          <button className="btn btn-danger" onClick={() => this.HandleLogin()}>
            Login
          </button>
          <br />
          <br />
          <button className="btn btn-danger" onClick={() => this.HandleRedirect()}>
            Redirect
          </button>
          <Two shareData={this.getData} />
          <One ref={this.one} />
          <Three ref={this.three} />
        </div>
    );
  }
}

export default Home;
