import React, {Component} from 'react';

class AddTodos extends Component {
  state = {
    content: ''
  }

  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    });
  }

  handleOnChange = (e) => {
    this.setState({
      content:e.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="input-todo"> Add new todo </label>
          <input name="input-todo" type="text" className="center" onChange={this.handleOnChange} value={this.state.content}/>
        </form>
      </div>
    );
  }
}


export default AddTodos;
