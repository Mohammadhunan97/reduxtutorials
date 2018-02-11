# reduxtutorials
code I created based off the getting started with redux series from the official documentation


## PRINCIPLES OF REDUX: 
	1. ONE SINGULAR STATE: Everything is contained in one single state object (state tree).
	2. STATE IS READ ONLY: You can't write to the state tree, you must dispatch an action to make an adjustment (like a public object in java).
	3. STATE CAN BE CHANGED ONLY BY "PURE" FUNCTIONS KNOWN AS REDUCTERS: these functions describe events which can change state, you can later dispatch events.

## Using Redux Quick CheckList:
    1. declare createStore
    2. create reducer method
    3. let store = createStore(reducer)
    4. create component with ability to dispatch events
    5. create render method and store.subscribe to the render method. 
    6. call the render method

```javascript
const render = () => {
        ReactDOM.render(<App />, document.getElementById('app'));
      }
      store.subscribe(render);
      render();
```

## LINKS: 

#### Counter Application:
[COUNTER REPO](./REDUXCOUNTER)
		<br/>
[SEE DEMO IN BROWSER](https://s3.amazonaws.com/reduxsamples/counter.html)


#### REDUX TODO 1 (project I created without the documentation videos as a guide):
[TODO 1 REPO](./REDUXTODO1)
<br/>
[SEE DEMO IN BROWSER](https://s3.amazonaws.com/reduxsamples/todo1.html)



