import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  ProgressBar,
  ControlGroup,
  Checkbox as AntCheckbox,
  InputGroup,
  Button,
} from '@blueprintjs/core';

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Checkbox = styled(AntCheckbox)`
  && {
    margin-bottom: 0;
    display: flex;
    align-items: center;
    margin-right: 20px !important;
  }
`;

const Controls = styled.div`
  display: flex;
`;

const calculateProgressLength = todos =>
  todos.filter(td => td.isDone).length / todos.length;

const Header = ({
  undo,
  redo,
  todos,
  ui,
  changeSearchable,
  toggleVisibility,
}) => (
  <Wrapper>
    <Content>
      <h1>To-Do List</h1>

      <Controls>
        <ControlGroup vertical={false}>
          <Checkbox checked={ui.isDoneVisible} onClick={toggleVisibility}>
            Show done
          </Checkbox>
          <InputGroup
            value={ui.searchable}
            onChange={e => changeSearchable(e.target.value)}
            placeholder="Search"
            rightElement={
              ui.searchable.length ? (
                <Button icon="cross" onClick={() => changeSearchable('')} />
              ) : null
            }
          />
        </ControlGroup>

        <ControlGroup vertical={false} style={{ marginLeft: 30 }}>
          <Button onClick={undo}>Undo</Button>
          <Button onClick={redo}>Redo</Button>
        </ControlGroup>
      </Controls>
    </Content>

    <ProgressBar value={calculateProgressLength(todos)} />
  </Wrapper>
);

Header.propTypes = {
  ui: PropTypes.shape({
    searchable: PropTypes.string.isRequired,
    isDoneVisible: PropTypes.bool.isRequired,
  }).isRequired,
  changeSearchable: PropTypes.func.isRequired,
  toggleVisibility: PropTypes.func.isRequired,
  undo: PropTypes.func.isRequired,
  redo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      categoryId: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
};

export default Header;
