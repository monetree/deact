import React, { Component } from 'react';


class App extends Component {


  componentDidMount() {
    let url = `/user/`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
  }


  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
