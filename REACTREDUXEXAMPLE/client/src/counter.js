import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Increment, Decrement} from './store/actions';
/* import PropTypes from 'prop-types'; */
//onClick={() => store.dispatch({type: 'increment'})}

class Counter extends Component {
  render() {
    this.dispatch = this.props.dispatch;
    return (
      <div className="Counter">
        <button onClick={() => this.dispatch(Increment())}>+</button> &nbsp;
        <button onClick={() => this.dispatch(Decrement())}>-</button>
      </div>
    );
  }
}

const dispatch = (state) => {
  return {
    state,
  }
}
export default connect(dispatch)(Counter);


/*
Counter.contextTypes = {
  store: PropTypes.object
};
export default Counter;
*/