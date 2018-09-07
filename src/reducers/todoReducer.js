import { 
  FETCH_ALL_TODOS_STARTED,
  FETCH_ALL_TODOS_SUCCESS,
  CREATE_TODO_STARTED,
  CREATE_TODO_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  isFetchingAllTodos: false,
  isCreatingNewTodo: false,
  allTodos: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_TODOS_STARTED:
      return {
        ...state,
        isFetchingAllTodos: true,
      }
    case FETCH_ALL_TODOS_SUCCESS:
      return {
        ...state,
        isFetchingAllTodos: false,
        allTodos: action.todos,
      }
    case CREATE_TODO_STARTED:
      return {
        ...state,
        isCreatingNewTodo: true,
      }
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        isCreatingNewTodo: false,
      }
    default:
      return state
  }
}