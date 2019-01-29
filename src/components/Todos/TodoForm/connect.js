import { connect } from 'react-redux';

import TodoFormContainer from './container';
import { actions, selectors } from '../../../redux/modules/todos';

const mapStateToProps = state => {
  return { ...selectors.todos(state), router: state.router };
};

export default connect(
  mapStateToProps,
  actions
)(TodoFormContainer);
