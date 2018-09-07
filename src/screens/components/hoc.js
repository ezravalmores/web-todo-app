import React, { Component as ReactComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import {
  createTodoRequest,
} from '../../actions/todoActions';

const mapStateToProps = (state) => ({
  isCreatingTodo: state.todo.isCreatingTodo,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      createTodoRequest,
    },
    dispatch,
  );

// Can be use in screens that has same 
// properties and stuff :-)
const HocContainerWrapper = (
  Component,
) =>
  class HOCComponent extends ReactComponent {
    render() {
      return <Component {...this.props} />;
    }
  };

export const HocContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  HocContainerWrapper,
);
