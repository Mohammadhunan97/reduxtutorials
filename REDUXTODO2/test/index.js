const assert = require('chai').assert;



let foo = () =>{
	return 1;
}


describe('To Do List App', () =>{
	describe('foo method', () => {
		it('should return the integer 1', () =>{
			let result = foo();
			assert.equal(result,1);
		})
	})
})

