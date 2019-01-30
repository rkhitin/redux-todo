import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from './reducers';

const basename = document.location.href.includes('rkhitin.github')
  ? '/redux-todo/'
  : '/';

export const history = createBrowserHistory({
  basename,
});

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(applyMiddleware(routerMiddleware(history)))
  );

  return store;
}
