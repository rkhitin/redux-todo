import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Checkbox, Button } from '@blueprintjs/core';

const Wrapper = styled.div`
  border: 1px solid #bbb;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 3px;
`;

const Todo = ({ id, isDone, title, toggle }) => (
  <Wrapper>
    <div>
      <Checkbox checked={isDone} onClick={toggle}>
        {title}
      </Checkbox>
    </div>

    <div>
      <Link to={`/todo/${id}/edit`}>
        <Button icon="edit" />
      </Link>
    </div>
  </Wrapper>
);

Todo.propTypes = {
  isDone: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Todo;
