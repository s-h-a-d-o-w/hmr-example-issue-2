import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Branch1 from './branch1';
import Branch2 from './branch2';

class App extends Component {
  render() {
    return (<div>
      <h2>Welcome to Lola!</h2>
      <Branch1/>
      <Branch2/>
    </div>)
  }
}

export default hot(module)(App)
