import React, { Component } from 'react';
/* import PropTypes from 'prop-types'; // only needed if you are not using react-redux package */
import { connect } from 'react-redux';
import Counter from './counter';


       // <h1>Value: {store.getState()} </h1>


class App extends Component {
  render() {
    this.count = this.props.state;
    return (
      <div className="App">
        {
          /* 
        only needed if you are not using react redux package
          <h1>Value: {store.getState()} </h1> 
          */
        }
        <h1>Value: {this.count}</h1>
        <Counter />

      </div>
    );
  }
}

const count = state => {
  return {state,}
}

export default connect(count)(App);

/* only needed if you are not using react-redux package */
// App.contextTypes = {
//   store: PropTypes.object
// };


// export default App;
 