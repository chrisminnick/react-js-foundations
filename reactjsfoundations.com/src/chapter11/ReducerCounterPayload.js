import { useReducer } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement', payload: 4 })}>
        -4
      </button>
      <button onClick={() => dispatch({ type: 'increment', payload: 4 })}>
        +4
      </button>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useReducer} from 'react';
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + action.payload};
    case 'decrement':
      return {count: state.count - action.payload};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement', payload:4})}>-4</button>
      <button onClick={() => dispatch({type: 'increment', payload:4})}>+4</button>
    </>
  );
}

export default Counter;
`}
      </SyntaxHighlighter>
    </>
  );
}

export default Counter;
