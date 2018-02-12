import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import Counter from './store/reducer';
const store = createStore(Counter);



const render = () => {
	ReactDOM.render(<Provider store={store}>
		<App />
		</Provider>, document.getElementById('root'));
	console.log(store.getState());
}

store.subscribe(render);
render();











