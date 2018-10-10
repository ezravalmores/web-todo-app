import * as React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap';
import check from '../../check.png'

const Todo = ({ completed, title }) => (
  <div className="todo">
    <div className="content">
        <div className="todo-text">{title}</div>
    </div>
    
    {!completed && (
      <div className="actions">
        <Button outline color="primary" size="sm">Mark as complete</Button>
      </div>
    )}

    {completed && (
      <div className="actions">
        <img src={check} className="check" />
      </div>
    )}
  </div>
)

Todo.propTypes = {
  id: PropTypes.string,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
}

export default Todo