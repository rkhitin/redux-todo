import nanoid from 'nanoid';

import actionTypes from './actionTypes';

const init = [
  {
    id: '1',
    title: '1111',
    categoryId: '1',
    isDone: false,
  },
  {
    id: '2',
    title: '2222',
    categoryId: '1',
    isDone: true,
  },
];

export default function reducer(state = init, action = {}) {
  switch (action.type) {
    case actionTypes.add:
      return [
        ...state,
        {
          title: action.title,
          categoryId: action.categoryId,
          id: nanoid(),
          isDone: false,
        },
      ];

    case actionTypes.remove:
      return state.filter(td => td.id !== action.todoId);

    case actionTypes.removeWithCategory:
      return state.filter(td => td.categoryId !== action.categoryId);

    case actionTypes.toggle:
      return state.map(td => {
        if (td.id !== action.todoId) return td;

        return { ...td, isDone: !td.isDone };
      });

    case actionTypes.update:
      return state.map(c => {
        if (c.id !== action.todoId) return c;
        return { ...c, title: action.title, isDone: action.isDone };
      });

    default:
      return state;
  }
}
