import React from 'react';
import PropTypes from 'prop-types';

import InputWithButton from './InputWithButton';

class InputWithButtonContainer extends React.Component {
  state = {
    text: '',
  };

  handleChange = text => {
    this.setState({
      text,
    });
  };

  handleSubmit = () => {
    const { text } = this.state;
    const { onSubmit } = this.props;

    onSubmit(text);

    this.setState({
      text: '',
    });
  };

  render() {
    const { text } = this.state;
    const { placeholder } = this.props;

    return (
      <InputWithButton
        placeholder={placeholder}
        text={text}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

InputWithButtonContainer.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

InputWithButtonContainer.defaultProps = {
  placeholder: '',
};

export default InputWithButtonContainer;
