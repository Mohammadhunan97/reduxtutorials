/*
	Although this pattern may seem like overkill, separating the actions into a different file will help so we don't have to muddy up our react code with redux code, we can just fire methods (such as: Actions.increment())
*/

export function Increment (){
	return {
		type: 'increment'
	}
}

export function Decrement (){
	return {
		type: 'decrement'
	}
}

export function getCount (){
	return {
		type: 'default' // note: this is because the default will return the state
	}
}