import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import { 
  fetchAllTodosRequest, 
  markTodoAsCompleteRequest,
  //createTodoRequest,
} from '../actions/todoActions';
import { connect } from 'react-redux';
import TodoList from './components/todoList';
import NewTodoForm from './components/newTodoForm';
import { HocContainer } from './components/hoc';

const mapStateToProps = (state) => ({
  allTodos: state.todo.allTodos,
  isFetchingAllTodos: state.todo.isFetchingAllTodos,
  isCreatingTodo: state.todo.isCreatingTodo,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchAllTodosRequest,
      markTodoAsCompleteRequest,
      // createTodoRequest,
    },
    dispatch,
);

class All extends Component {

  componentDidMount() {
    this.props.fetchAllTodosRequest()
  }

  render() {
    return (
      <div id="all">
        {!this.props.isFetchingAllTodos && this.props.allTodos && this.props.allTodos.length > 0 && (
          <div>
            <NewTodoForm 
              createTodoRequest={this.props.createTodoRequest}
              isCreatingTodo={this.props.isCreatingTodo}
            />
            <TodoList 
              todos={this.props.allTodos} 
              markTodoAsCompleted={this.props.markTodoAsCompleteRequest}
            />
          </div>
        )}

        {this.props.isFetchingAllTodos && (
          <h5>Fetching all todos...</h5>
        )}
      </div>
	  );
  }
}

export default compose(
  HocContainer,
  connect(mapStateToProps, mapDispatchToProps)
)(All);
