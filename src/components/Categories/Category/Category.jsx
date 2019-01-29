import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Dialog,
  Icon,
  Button,
  InputGroup as BInputGroup,
  Classes,
} from '@blueprintjs/core';

const Wrapper = styled.div`
  border: 1px solid #bbb;
  border-radius: 5px;
  padding: 3px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;
`;

const Title = styled.div`
  margin: 0 10px;
`;

const Inputs = styled.div`
  display: flex;
  align-items: center;
`;

const DialogContent = styled.div`
  padding: 10px;
`;

const InputGroup = styled(BInputGroup)`
  margin: 0 10px;
`;

const Category = ({
  id,
  title,
  isEditing,
  edit,
  handleTitleChange,
  update,
  remove,
  handleNewCategoryTitleChange,
  isModalVisible,
  newCategoryTitle,
  closeModal,
  submitModal,
  openModal,
  isChecked,
}) => {
  return (
    <Wrapper>
      <Inputs>
        {isChecked && <Icon icon="tick" />}
        {isEditing ? (
          <InputGroup
            value={title}
            onChange={e => handleTitleChange(e.target.value)}
          />
        ) : (
          <Title>
            <Link to={`/category/${id}`}>{title}</Link>
          </Title>
        )}
        {isEditing ? (
          <Button small icon="tick" onClick={update} />
        ) : (
          <Button small icon="edit" onClick={edit} />
        )}
      </Inputs>

      <div>
        <Button small icon="trash" onClick={remove} />
        <Button small icon="plus" onClick={openModal} />
      </div>

      <Dialog
        isOpen={isModalVisible}
        onClose={closeModal}
        className={Classes.OVERLAY_SCROLL_CONTAINER}
      >
        <DialogContent>
          <InputGroup
            value={newCategoryTitle}
            onChange={e => handleNewCategoryTitleChange(e.target.value)}
            autoFocus
          />

          <Button onClick={closeModal}>Close</Button>
          <Button onClick={submitModal}>Add</Button>
        </DialogContent>
      </Dialog>
    </Wrapper>
  );
};

Category.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  newCategoryTitle: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  isModalVisible: PropTypes.bool.isRequired,
  edit: PropTypes.func.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  handleNewCategoryTitleChange: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  submitModal: PropTypes.func.isRequired,
};

export default Category;
