import React, { Component } from 'react';
import Todos from './Todos';
import AddTodos from './AddTodos';

class App extends Component {
  state = {
    todos: []
  }

  deleteTodo = (id) => {
    const todoslist = this.state.todos.filter((todo)=>{
      return !(id === todo.id );
    });

    this.setState({
      todos: todoslist
    });
  }

  addTodo = (todo) => {
    todo.id = this.state.todos.length  + 1;
    let todoList = [...this.state.todos,todo];
    this.setState({
      todos: todoList
    });
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text"> Todos </h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodos todos={this.state.todos} addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
