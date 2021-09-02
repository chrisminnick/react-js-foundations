import {useState} from 'react';

export const ToDoFunctionSimple = (props)=>{
  const [item,setItem] = useState('');
  const [todolist,setTodoList] = useState([]);
      
  const handleSubmit = (e)=>{
    e.preventDefault();
    const list = [...todolist, item];
    setTodoList(list)
  }
  const currentTodos = todolist.map((todo,index)=><p key={index}>{todo}</p>);
  return (
    <>
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
    <pre>
{`import {useState} from 'react';

export const ToDoFunctionSimple = (props)=>{
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
}`}
    </pre>
    </>
  );
}