import React, { Component } from 'react';
import MainContainer from './containers/MainContainer';
import Bananas from './components/BananaLeft'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: ''
    }
  }

  render() {
    return(
      <div className="App">
        <h1 id="title">Bob's Banana Budget!</h1>
        <MainContainer />
      </div>
    )
  }
}

export default App;
