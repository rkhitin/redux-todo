import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo';

import Header from './Header';
import { selectors as todoSelectors } from '../../redux/modules/todos';
import { actions, selectors as uiSelectors } from '../../redux/modules/ui';

const mapStateToProps = state => {
  return { ...todoSelectors.todos(state), ...uiSelectors.ui(state) };
};

export default connect(
  mapStateToProps,
  { ...ActionCreators, ...actions }
)(Header);
