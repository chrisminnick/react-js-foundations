import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class ToDoClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      todolist: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const list = [...this.state.todolist, this.state.item];
    this.setState({
      todolist: list,
    });
  }

  handleChange(e) {
    this.setState({ item: e.target.value });
  }

  render() {
    const currentTodos = this.state.todolist.map((todo, index) => (
      <p key={index}>{todo}</p>
    ));
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="todoitem"
            value={this.state.item}
            onChange={this.handleChange}
            placeholder="what to do?"
          />
          <button type="submit">Add</button>
          {currentTodos}
        </form>
        <SyntaxHighlighter language="javascript" style={github}>
          {`import React from 'react';

class ToDoClass extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        item: '',
        todolist: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
      
  handleSubmit(e){
    e.preventDefault();
    const list = [...this.state.todolist, this.state.item];
    this.setState({
        todolist:list
    })
  }

  handleChange(e){
    this.setState({item:e.target.value});
  }
      
  render(){
    const currentTodos = this.state.todolist.map(
      (todo,index)=><p key={index}>{todo}</p>);
    return (
      <form onSubmit={this.handleSubmit}>
      <input type="text" 
             id="todoitem" 
             value={this.state.item} 
             onChange={this.handleChange}
             placeholder="what to do?" />
      <button type="submit">
        Add
      </button>
      {currentTodos}
      </form>
    );
  }
}
    
export default ToDoClass;`}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default ToDoClass;
