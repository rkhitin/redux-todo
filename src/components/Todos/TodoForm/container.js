import React from 'react';
import PropTypes from 'prop-types';

import TodoForm from './TodoForm';

class TodoFormContainer extends React.Component {
  constructor(props) {
    super(props);

    const todo = this.getCurrentTodo();

    this.state = {
      title: todo.title,
      isDone: todo.isDone,
    };
  }

  getCurrentTodo = () => {
    const { match, todos } = this.props;
    const { todoId } = match.params;
    const todo = todos.find(td => td.id === todoId);

    return todo;
  };

  handleTitleChange = title => {
    this.setState({ title });
  };

  toggle = () => {
    const { isDone } = this.state;

    this.setState({ isDone: !isDone });
  };

  save = () => {
    const { title, isDone } = this.state;
    const { update } = this.props;
    const todo = this.getCurrentTodo();

    update(todo.id, isDone, title);
    this.cancel();
  };

  cancel = () => {
    const { history } = this.props;
    const { goBack } = history;

    goBack();
  };

  render() {
    const { title, isDone } = this.state;

    const todoFormProps = {
      title,
      isDone,
      save: this.save,
      handleTitleChange: this.handleTitleChange,
      toggle: this.toggle,
      cancel: this.cancel,
    };

    return <TodoForm {...todoFormProps} />;
  }
}

TodoFormContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      categoryId: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
  update: PropTypes.func.isRequired,
};

export default TodoFormContainer;
