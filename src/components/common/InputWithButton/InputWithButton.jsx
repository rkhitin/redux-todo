import React from 'react';
import PropTypes from 'prop-types';

import { ControlGroup, InputGroup, Button } from '@blueprintjs/core';

const InputWithButton = ({ text, onChange, onSubmit, placeholder }) => (
  <ControlGroup>
    <InputGroup
      placeholder={placeholder}
      value={text}
      onChange={e => onChange(e.target.value)}
    />
    <Button disabled={text.length <= 0} onClick={onSubmit}>
      Add
    </Button>
  </ControlGroup>
);

InputWithButton.propTypes = {
  placeholder: PropTypes.string,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

InputWithButton.defaultProps = {
  placeholder: '',
};

export default InputWithButton;
