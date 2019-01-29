import nanoid from 'nanoid';

import actionTypes from './actionTypes';

const init = [
  {
    id: '1',
    title: '1111',
    parentId: null,
  },
  {
    id: '2',
    title: '2222',
    parentId: '1',
  },
  {
    id: '3',
    title: '3333',
    parentId: '2',
  },
  {
    id: '4',
    title: '444',
    parentId: null,
  },
];

const remove = (categoryId, categories) => {
  let newCategories = categories.filter(c => c.id !== categoryId);
  const childs = categories.filter(c => c.parentId === categoryId);

  if (childs.length) {
    childs.forEach(c => {
      newCategories = remove(c, newCategories);
    });
  }

  return newCategories;
};

export default function reducer(state = init, action = {}) {
  switch (action.type) {
    case actionTypes.add:
      return [
        ...state,
        {
          title: action.title,
          id: nanoid(),
          parentId: null,
        },
      ];

    case actionTypes.addChild:
      return [
        ...state,
        {
          title: action.title,
          parentId: action.parentId,
          id: nanoid(),
        },
      ];

    case actionTypes.remove:
      return remove(action.categoryId, state);

    case actionTypes.update:
      return state.map(c => {
        if (c.id !== action.categoryId) return c;
        return { ...c, title: action.title };
      });

    default:
      return state;
  }
}
