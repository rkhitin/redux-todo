import actionTypes from './actionTypes';

export const add = title => {
  return { type: actionTypes.add, title };
};

export const addChild = (parentId, title) => {
  return { type: actionTypes.addChild, title, parentId };
};

export const remove = categoryId => {
  return { type: actionTypes.remove, categoryId };
};

export const update = (categoryId, title) => {
  return { type: actionTypes.update, title, categoryId };
};
