import { API } from '../API';

import { 
  FETCH_ALL_TODOS_STARTED,
  FETCH_ALL_TODOS_SUCCESS,
  CREATE_TODO_STARTED,
  CREATE_TODO_SUCCESS
} from './actionTypes';

function fetchAllTodos() {
  return {
    type: FETCH_ALL_TODOS_STARTED,
  }
}

function fetchAllTodosSuccess(todos) {
  return {
    type: FETCH_ALL_TODOS_SUCCESS,
    todos,
  }
}

function createTodo() {
  return {
    type: CREATE_TODO_STARTED,
  }
}

function createTodoSuccess() {
  return {
    type: CREATE_TODO_SUCCESS,
  }
}

export function createTodoRequest(title) {
  return function (dispatch) {

    dispatch(createTodo())

    return API.post(`https://morning-anchorage-70233.herokuapp.com/todos/`, { title: title })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          return new Error('Error');
        }
      })
      .then(json => {
        dispatch(createTodoSuccess())

        // Just fetch todos again in this workshop :-)
        // But if you want you can just update the todo in store
        dispatch(fetchAllTodosRequest())
      })
  }
}

export function fetchAllTodosRequest() {
    // Thunk middleware will pass dispatch to the return function
    return function (dispatch) {
      // First dispatch: the app state is updated to inform
      // that the API call is starting.
      dispatch(fetchAllTodos())
      // The function called by the thunk middleware can return a value,
      // that is passed on as the return value of the dispatch method.
      // In this case, we return a promise to wait for.
      // This is not required by thunk middleware, but it is convenient for us.
      return API.get('https://morning-anchorage-70233.herokuapp.com/todos')
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return new Error('Error');
          }
        })
        .then(json => {
          // We can dispatch many times!
          // Here, we update the app state with the results of the API call.
          dispatch(fetchAllTodosSuccess(json))
        })
        // We can handle failure here also and dispatch a failed action so the view will know
    }
  }