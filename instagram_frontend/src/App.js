import React, { Component } from 'react';
import frontImages from './instagram_clone/frontImages';
import frontUsers from './instagram_clone/frontUsers';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to InstagraMM</h1>
        </header>
        <p className="App-intro">
            "FIRST PAGE-NO COMPONENT THIS IS APP.JS"
            <frontUsers />
            <frontImages />
        </p>
      </div>
    );
  }
}

export default App;