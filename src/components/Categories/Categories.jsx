import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import InputWithButton from '../common/InputWithButton';
import Category from './Category';

const Controls = styled.div`
  margin-bottom: 20px;
`;

const Categories = ({ add, categories }) => {
  const renderCategory = category => (
    <React.Fragment key={category.id}>
      <Category category={category} />
      <div style={{ marginLeft: 10 }}>
        {categories.filter(c => c.parentId === category.id).map(renderCategory)}
      </div>
    </React.Fragment>
  );

  return (
    <div>
      <Controls>
        <InputWithButton placeholder="Enter category title" onSubmit={add} />
      </Controls>

      <div>{categories.filter(c => !c.parentId).map(renderCategory)}</div>
    </div>
  );
};

Categories.propTypes = {
  add: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Categories;
