import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { fetchAllTodosRequest, markTodoAsCompleteRequest } from '../actions/todoActions';
import { connect } from 'react-redux';
import TodoList from './components/todoList';

const mapStateToProps = (state) => ({
  allTodos: state.todo.allTodos,
  isFetchingAllTodos: state.todo.isFetchingAllTodos,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchAllTodosRequest,
      markTodoAsCompleteRequest,
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
        <h2 className="text-left">All Todos</h2>
        {!this.props.isFetchingAllTodos && this.props.allTodos && this.props.allTodos.length > 0 && (
          <TodoList 
            todos={this.props.allTodos} 
            markTodoAsCompleted={this.props.markTodoAsCompleteRequest}
          />
        )}

        {this.props.isFetchingAllTodos && (
          <h5>Fetching all todos...</h5>
        )}
      </div>
	  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(All);
