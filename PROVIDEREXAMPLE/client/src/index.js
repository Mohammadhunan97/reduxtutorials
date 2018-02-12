import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import Counter from './store/reducer';


let store = createStore(Counter);

class Provider extends React.Component {
  getChildContext() {
    return {
      store: store
    };
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}


Provider.childContextTypes = {
  store: PropTypes.object
};


const render = () => {
	ReactDOM.render(<Provider store={store}>
		<App />
		</Provider>, document.getElementById('root'));
	console.log(store.getState());
}

store.subscribe(render);
render();











