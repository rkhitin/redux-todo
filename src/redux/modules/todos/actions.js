import actionTypes from './actionTypes';

export const add = (categoryId, title) => {
  return { type: actionTypes.add, title, categoryId };
};

export const remove = todoId => {
  return { type: actionTypes.remove, todoId };
};

export const removeWithCategory = categoryId => {
  return { type: actionTypes.removeWithCategory, categoryId };
};

export const toggle = todoId => {
  return { type: actionTypes.toggle, todoId };
};

export const update = (todoId, isDone, title) => {
  return { type: actionTypes.update, title, isDone, todoId };
};
