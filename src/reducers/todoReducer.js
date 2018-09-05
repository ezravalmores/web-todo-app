import { 
  FETCH_ALL_TODOS_STARTED,
  FETCH_ALL_TODOS_SUCCESS,
  UPDATE_TODO_STARTED,
  UPDATE_TODO_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  isFetchingAllTodos: false,
  isFetchingStartedTodos: false,
  isFetchingCompletedTodos: false,
  isMarkingTodoAsCompleted: false,
  allTodos: [],
  startedTodos: [],
  completedTodos: [],
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
    case UPDATE_TODO_STARTED:
      return {
        ...state,
        isMarkingTodoAsCompleted: true,
      }
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        isMarkingTodoAsCompleted: false,
      }
    default:
      return state
  }
}