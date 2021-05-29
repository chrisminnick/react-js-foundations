import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}


const store = createStore(counterReducer)
const rootEl = document.getElementById('root')

const Counter = (props)=>{

  return (
      <p>
        Clicked: {props.value} times
        <button onClick={props.onIncrement}>
          +
        </button>
        <button onClick={props.onDecrement}>
          -
        </button>
      </p>
    )
  }  
const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)

render()
store.subscribe(render)
