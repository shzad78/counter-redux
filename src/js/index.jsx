import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
import { 
  createStore
} from 'redux';
import reducers from './reducers'

let store = createStore(reducers)

ReactDOM.render(
  <App store={store} />,
  document.querySelector('#app')
);


// const reducer = function(state=0, action) {
//   switch(action.type) {
//     case 'addOne':
//       var newState = state + action.payload
//       console.log('my new state is', newState)
//       return newState;
//     case 'subtractOne':
//       var newState = state - action.payload
//       console.log('my new state is', newState)
//       return newState;
//     case 'newValue':
//       var newState = action.payload
//       console.log('my new state is', newState)
//       return newState;
//   }
//   return state;
// };


// let store = createStore(reducer);
// // to change the value of state like this.setState()
// // only 'type' is reserved
// store.dispatch({
//   type: 'addOne',
//   payload: 1
// })

// store.dispatch({
//   type: 'subtractOne',
//   payload: 1
// })

// store.dispatch({
//   type: 'newValue',
//   payload: 6
// })
// to get the value of state
//console.log( 'store state is ', store.getState() )


// const reducer = function(state={number: 0}, action) {
//   switch(action.type) {
//     case 'addOne':
//       var newState = {...state, number: state.number + action.payload}
//       console.log(newState)
//       return newState
//     case 'newValue':
//       var newState = {...state, number: action.payload}
//       console.log('my new state is', newState)
//       return newState;
//   }
//   return state;
// };


// let store = createStore(reducer);
// // to change the value of state like this.setState()
// // only 'type' is reserved
// store.dispatch({
//   type: 'addOne',
//   payload: 1
// })

// store.dispatch({
//   type: 'addOne',
//   payload: 1
// })

// store.dispatch({
//   type: 'newValue',
//   payload: 6
// })








