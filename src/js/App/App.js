import React, { Component } from 'react';
import getInfo from '../api/getInfo';

class App extends Component {
  componentDidMount = async () => {
    console.log(await getInfo());
  };

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <button></button>
      </div>
    );
  }
}

export default App;
