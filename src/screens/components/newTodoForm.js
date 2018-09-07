import React, { Component } from 'react';
import { Button } from 'reactstrap';

class NewTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit() {
    const title = this.state.text;
    if(title && title.trim()) {
      this.props.createTodoRequest(this.state.text)
    }
  }

  render() {
    return (
      <div id="new-todo-form">
        <input
          className="input"
          value={this.state.text} 
          onChange={this.handleChange} 
          placeholder={"input new todo text"}
        />
       <Button 
         color="primary" 
         size="sm" 
         onClick={this.handleSubmit}
         disabled={this.props.isCreatingTodo}
       >
         Save
      </Button>
      </div>
	  );
  }
}

export default NewTodoForm;
