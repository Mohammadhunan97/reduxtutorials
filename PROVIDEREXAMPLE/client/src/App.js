import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './counter';

class App extends Component {

  render() {
    let store = this.context.store;
    return (
      <div className="App">
        <h1>Counter Value: {store.getState()}</h1>
        <Counter />
      </div>
    );
  }
}

App.contextTypes = {
  store: PropTypes.object
};




export default App;
