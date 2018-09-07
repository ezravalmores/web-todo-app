import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';

const TodoList = ({ todos }) => (
  <div>
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} />
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
}

export default TodoList;