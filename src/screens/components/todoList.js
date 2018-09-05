import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';

const TodoList = ({ todos, markTodoAsCompleted }) => (
  <div>
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} markTodoAsCompleted={markTodoAsCompleted} />
    ))}
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  markTodoAsCompleted: PropTypes.func,
}

export default TodoList;