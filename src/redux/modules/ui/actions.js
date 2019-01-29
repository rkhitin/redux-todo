import actionTypes from './actionTypes';

export const changeSearchable = searchable => {
  return { type: actionTypes.changeSearchable, searchable };
};

export const toggleVisibility = () => {
  return { type: actionTypes.toggleVisibility };
};
