import React from 'react';
import PropTypes from 'prop-types';

import Category from './Category';

class CategoryContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      isModalVisible: false,
      title: props.category.title,
      newCategoryTitle: '',
    };
  }

  handleTitleChange = title => {
    this.setState({ title });
  };

  edit = () => {
    this.setState({ isEditing: true });
  };

  update = () => {
    const { title } = this.state;
    const { update, category } = this.props;

    update(category.id, title);

    this.setState({
      isEditing: false,
    });
  };

  openModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalVisible: false,
      newCategoryTitle: '',
    });
  };

  handleNewCategoryTitleChange = newCategoryTitle => {
    this.setState({
      newCategoryTitle,
    });
  };

  addChildCategory = () => {
    const { addChild, category } = this.props;
    const { newCategoryTitle } = this.state;

    addChild(category.id, newCategoryTitle);

    this.closeModal();
  };

  remove = () => {
    const { remove, category, removeTodoWithCategory } = this.props;

    remove(category.id);
    removeTodoWithCategory(category.id);
  };

  render() {
    const { title, isEditing, isModalVisible, newCategoryTitle } = this.state;
    const { category, currentCategoryId } = this.props;
    const isChecked = category.id === currentCategoryId;

    const categoryProps = {
      id: category.id,
      isChecked,
      title,
      isEditing,
      isModalVisible,
      newCategoryTitle,
      handleTitleChange: this.handleTitleChange,
      edit: this.edit,
      update: this.update,
      remove: this.remove,
      closeModal: this.closeModal,
      handleNewCategoryTitleChange: this.handleNewCategoryTitleChange,
      submitModal: this.addChildCategory,
      openModal: this.openModal,
    };

    return <Category {...categoryProps} />;
  }
}

CategoryContainer.defaultProps = {
  currentCategoryId: '',
};

CategoryContainer.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  update: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  removeTodoWithCategory: PropTypes.func.isRequired,
  addChild: PropTypes.func.isRequired,
  currentCategoryId: PropTypes.string,
};

export default CategoryContainer;
