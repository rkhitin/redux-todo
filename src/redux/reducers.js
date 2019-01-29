import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import { connectRouter } from 'connected-react-router';

import todosReducer from './modules/todos';
import categoriesReducer from './modules/categories';
import uiReducer from './modules/ui';

export default history =>
  combineReducers({
    ui: uiReducer,
    router: connectRouter(history),
    todo: undoable(todosReducer),
    category: undoable(categoriesReducer),
  });
