import { connect } from 'react-redux';

import TodoList from './TodoList';
import {
  actions,
  selectors as todoSelectors,
} from '../../../redux/modules/todos';
import { selectors as uiSelectors } from '../../../redux/modules/ui';

const mapStateToProps = state => {
  return { ...todoSelectors.todos(state), ...uiSelectors.ui(state) };
};

export default connect(
  mapStateToProps,
  actions
)(TodoList);
