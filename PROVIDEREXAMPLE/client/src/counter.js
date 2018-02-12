import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  render() {
    let store = this.context.store;
    return (
      <div className="Counter">
        <button onClick={() => store.dispatch({type: 'increment'})}>+</button> &nbsp;
        <button onClick={() => store.dispatch({type: 'decrement'})}>-</button>
      </div>
    );
  }
}

Counter.contextTypes = {
  store: PropTypes.object
};




export default Counter;
