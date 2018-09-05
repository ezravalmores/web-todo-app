import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const middlewares = [thunk];

function enhancers() {
  const devtools = window['devToolsExtension']
    ? window['devToolsExtension']()
    : (f) => f;
  
  return compose(
    applyMiddleware(...middlewares),
    devtools,
  );
}

export default function configureStore() {
  const enhancer = enhancers();

  return createStore(
    rootReducer,
    undefined,
    enhancer,
 );
}