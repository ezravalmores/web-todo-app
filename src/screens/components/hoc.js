import React, { Component as ReactComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import {

} from '../todosAction';
import {
  getCurrentTodoTabName,
  getIsFetchingTodoDetails,
} from '../todosSelector';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
    },
    dispatch,
  );

// An HOC for todo cards, it can be use for
// weekly, upcoming, completed, expired
const HOCWrapper = (
  Component,
) =>
  class HOCComponent extends ReactComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return <Component {...this.props} />;
    }
  };

export const withTodoCardsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  HOCWrapper,
);
