import actionTypes from './actionTypes';

const init = {
  isDoneVisible: true,
  searchable: '',
};

export default function reducer(state = init, action = {}) {
  switch (action.type) {
    case actionTypes.changeSearchable:
      return { ...state, searchable: action.searchable };

    case actionTypes.toggleVisibility:
      return { ...state, isDoneVisible: !state.isDoneVisible };

    default:
      return state;
  }
}
