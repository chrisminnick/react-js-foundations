import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function ToDoFunction(props) {
  const [item, setItem] = useState('');
  const [todolist, setTodoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const list = [...todolist, item];
    setTodoList(list);
  };
  const currentTodos = todolist.map((todo, index) => <p key={index}>{todo}</p>);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="todoitem"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
          placeholder="what to do?"
        />
        <button type="submit">Add</button>
        {currentTodos}
      </form>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import React,{useState} from 'react';

function ToDoFunction(props){
  const [item,setItem] = useState('');
  const [todolist,setTodoList] = useState([]);
      
  const handleSubmit = (e)=>{
    e.preventDefault();
    const list = [...todolist, item];
    setTodoList(list)
  }
  const currentTodos = todolist.map((todo,index)=><p key={index}>{todo}</p>);
  return (
    <form onSubmit={handleSubmit}>
    <input type="text" 
            id="todoitem" 
            value={item} 
            onChange={(e)=>{setItem(e.target.value)}}
            placeholder="what to do?" />
    <button type="submit">
    Add
    </button>
    {currentTodos}
    </form>
  );
}
    
export default ToDoFunction;`}
      </SyntaxHighlighter>
    </>
  );
}

export default ToDoFunction;
