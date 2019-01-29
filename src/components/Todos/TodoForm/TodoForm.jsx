import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { InputGroup, Button, Checkbox, TextArea } from '@blueprintjs/core';

const Row = styled.div`
  margin: 10px 0;
`;

const TodoForm = ({
  save,
  cancel,
  title,
  isDone,
  toggle,
  handleTitleChange,
}) => {
  return (
    <div>
      <Row>
        <Button onClick={save}>Save Changes</Button>
        <Button onClick={cancel}>Cancel</Button>
      </Row>

      <Row>
        <InputGroup
          value={title}
          onChange={e => handleTitleChange(e.target.value)}
        />
      </Row>

      <Row>
        <Checkbox checked={isDone} onClick={toggle}>
          Done
        </Checkbox>
      </Row>

      <Row>
        <TextArea large value="????" onChange={() => ({})} />
      </Row>
    </div>
  );
};

TodoForm.propTypes = {
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  save: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
};

export default TodoForm;
