import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Todo from './Todo';
import InputWithButton from '../../common/InputWithButton';

const Controls = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
`;

const TodoList = ({ match, add, toggle, todos, ui }) => {
  const { categoryId } = match.params;
  const addWithCategory = title => add(categoryId, title);
  let currentTodos = todos.filter(td => td.categoryId === categoryId);

  if (!ui.isDoneVisible) {
    currentTodos = currentTodos.filter(td => !td.isDone);
  }

  if (ui.searchable) {
    const r = new RegExp(`.*${ui.searchable.toLowerCase()}.*`);
    currentTodos = currentTodos.filter(
      td => td.title.toLowerCase().search(r) !== -1
    );
  }

  return (
    <div>
      <Controls>
        <InputWithButton
          placeholder="Enter todo text"
          onSubmit={addWithCategory}
        />
      </Controls>

      <div>
        {currentTodos.map(todo => (
          <Todo key={todo.id} {...todo} toggle={() => toggle(todo.id)} />
        ))}
        {currentTodos.length === 0 && <div>Empty todo list</div>}
      </div>
    </div>
  );
};

TodoList.propTypes = {
  add: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      categoryId: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
  ui: PropTypes.shape({
    searchable: PropTypes.string.isRequired,
    isDoneVisible: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoList;
