import { connect } from 'react-redux';

import Categories from './Categories';
import { actions, selectors } from '../../redux/modules/categories';

export default connect(
  selectors.categories,
  actions
)(Categories);
