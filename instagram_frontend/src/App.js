import React, { Component } from 'react';

import FrontImages from './instagram_clone/FrontImages';
import FrontUsers from './instagram_clone/FrontUsers';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to InstagraMM</h1>
        </header>
        <p className="App-intro">
            "FIRST PAGE-NO COMPONENT THIS IS APP.JS"
            <FrontUsers />
            <FrontImages />
        </p>
      </div>
    );
  }
}

export default App