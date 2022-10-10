import React, { Component, createRef } from 'react';

class Input extends Component {
  inputRef = createRef();
  focusInput = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div className='form-group'>
        <label htmlFor={this.props.label}>{this.props.label}</label>
        <input
          type={this.props.type}
          name={this.props.name}
          value={this.props.value}
          className={`form-control ${this.props.invalid && 'invalid'} `}
          onChange={this.props.onInputChange}
          autoComplete={'off'}
          ref={this.inputRef}
        />
      </div>
    );
  }
}

export default Input;
