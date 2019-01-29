import React from 'react';
import { Route, Switch } from 'react-router';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

const Todos = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <h2>Select category</h2>} />
        <Route path="/category/:categoryId" component={TodoList} />
        <Route path="/todo/:todoId/edit" component={TodoForm} />
      </Switch>
    </div>
  );
};

export default Todos;
