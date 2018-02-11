const assert = require('chai').assert,
 deepFreeze  = require('deep-freeze');

let todoReducter = (state = [], action) => {
    switch(action.type){
      case 'ADD_TODO':
       return addTodo(state,action);
      case 'TOGGLE_TODO':
       return toggleTodo(state,action);
      default:
        return state;
    }
  }


const addTodo = (state, action) => {
   return [
          ...state, //includes all previous objects into the state
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
}

const toggleTodo = (state, action) => {
  return state.map(item => {
          if(item.id !== action.id){
            return item;
          }else{
            return {
              ...item,
              completed: !item.completed //toggles to the opposite value; if true then turns false, if false then turns true
            }
          }
        })
}
describe('To Do List App', () =>{
	describe('todo reducter', () => {
		it('IF ACTION.TYPE = ADD_TODO, new state = old state + action', () => {
			let stateBefore = []; 
			let theAction = {
				type: 'ADD_TODO',
				id: 0,
				text: 'hello world'
			}
			let stateAfter = [{
				id: 0,
				text: 'hello world',
				completed: false
			}];
			deepFreeze(stateBefore);
			deepFreeze(theAction);

			let result = todoReducter([], theAction);
			assert.deepEqual(result, stateAfter); //compares objects data rather than comparing that they are the same exact object (.deepEqual should only be used with arrays and objects).
		})

		it('IF ACTION.TYPE = TOGGLE_TODO, new state = old state, but item with action.id should toggle its item.completed', () => {
			let stateBefore = [{
				id: 0,
				text: 'buy a fish',
				completed: false
			},
			{
				id: 1,
				text: 'go jogging',
				completed: false
			}];
			let theAction = {
				type: 'TOGGLE_TODO',
				id: 1
			}
			let stateAfter = [{
				id: 0,
				text: 'buy a fish',
				completed: false
			},
			{
				id: 1,
				text: 'go jogging',
				completed: true
			}];
			deepFreeze(stateBefore);
			deepFreeze(theAction);
			let result = todoReducter(stateBefore, theAction);
			assert.deepEqual(result,stateAfter);
		})
	})
})

