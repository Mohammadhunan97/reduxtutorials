const assert = require('chai').assert,
 deepFreeze  = require('deep-freeze'),
 redux		 = require('redux');

let combineReducers = redux.combineReducers;


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

let todos = (state = [], action) => {
    switch(action.type){
      case 'ADD_TODO':
       return addTodo(state,action);
      case 'TOGGLE_TODO':
       return toggleTodo(state,action);
      default:
        return state;
    }
  }

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type){
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}


let todoApp = combineReducers({ todos, visibilityFilter});




describe('todoApp add a single todo', () => {
	it('new state = a copy of old state + action when state has not been altered', () =>{
		let oldState = { todos: [], visibilityFilter: 'SHOW_ALL' };
		let action = {
			type: 'ADD_TODO',
			id: 0,
			text: 'first item in list'
		}
		let expectedState = {
			"todos": [{
				"id": 0,
				"text": "first item in list",
				"completed":false
			}],
			"visibilityFilter": "SHOW_ALL"
		}

		deepFreeze(oldState);
		deepFreeze(action);

		let result = todoApp(oldState, action);
		assert.deepEqual(result, expectedState);
	})

  it('new state = a copy of old state + action when state has been altered', () => {
    let oldState = {
      "todos": [{
        "id": 0,
        "text": "first item in list",
        "completed":false
      }],
      "visibilityFilter": "SHOW_ALL"
    };
    let action = {
      type: 'ADD_TODO',
      id: 1,
      text: 'second item in list'
    };
    let expectedState = {
      "todos": [{
        "id": 0,
        "text": "first item in list",
        "completed":false
      },
      {
      id: 1,
      text: 'second item in list',
      "completed":false
    }],
      "visibilityFilter": "SHOW_ALL"
    };
    deepFreeze(oldState);
    deepFreeze(action);

    let result = todoApp(oldState, action);
    assert.deepEqual(result, expectedState);

  }) //end of it
}) //end of describe


describe('todoApp toggles todo', () => {
  it('when completed is toggled, state remains the same but completed is changed from true to false or vice versa', () => {
    let oldState = {
      "todos": [{
        "id": 0,
        "text": "first item in list",
        "completed":false
      },
      {
      id: 1,
      text: 'second item in list',
      "completed":false
    }],
      "visibilityFilter": "SHOW_ALL"
    };
    let action = {
      type: 'TOGGLE_TODO',
      id: 1
    };
    let expectedState = {
      "todos": [{
        "id": 0,
        "text": "first item in list",
        "completed":false
      },
      {
      id: 1,
      text: 'second item in list',
      "completed":true
    }],
      "visibilityFilter": "SHOW_ALL"
    };
    deepFreeze(oldState);
    deepFreeze(action);

    let result = todoApp(oldState, action);
    assert.deepEqual(result, expectedState);

  });// end of it
});// end of describe

describe('todoApp changes visibility filter', () => {
  it('when visibilityFilter is changed from SHOW_ALL to SHOW_COMPLETED, the rest of the state is unchanged', () => {
    let oldState = {
      "todos": [{
        "id": 0,
        "text": "first item in list",
        "completed":false
      },
      {
      id: 1,
      text: 'second item in list',
      "completed":true
    }],
      "visibilityFilter": "SHOW_ALL"
    };
    let action = {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_COMPLETED'
    }
    let expectedState = {
      "todos": [{
        "id": 0,
        "text": "first item in list",
        "completed":false
      },
      {
      id: 1,
      text: 'second item in list',
      "completed":true
    }],
      "visibilityFilter": "SHOW_COMPLETED"
    };
    deepFreeze(oldState);
    deepFreeze(action);

    let result = todoApp(oldState, action);
    assert.deepEqual(result, expectedState);

  }); //end of it
});//end of describe