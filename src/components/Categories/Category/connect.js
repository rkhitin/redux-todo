import { connect } from 'react-redux';
import { createMatchSelector } from 'connected-react-router';

import CategoryContainer from './container';
import { actions } from '../../../redux/modules/categories';
import { actions as todoActions } from '../../../redux/modules/todos';

const mapStateToProps = state => {
  const matchSelector = createMatchSelector({ path: '/category/:id' });
  const match = matchSelector(state);

  return {
    currentCategoryId: match ? match.params.id : null,
  };
};

export default connect(
  mapStateToProps,
  { ...actions, removeTodoWithCategory: todoActions.removeWithCategory }
)(CategoryContainer);
