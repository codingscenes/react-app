import React, { Component, createRef } from 'react';

class Input extends Component {
  childInputRef = createRef(null);

  inputFocus = () => {
    this.childInputRef.current.focus();
  }
  render() {
    return (
      <div className='form-group'>
        <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
        <input
          type={this.props.type}
          name={this.props.name}
          value={this.props.value}
          className='form-control'
          onChange={this.props.onInputChange}
          autoComplete={'off'}
          ref={this.childInputRef}
        />
      </div>
    );
  }
}

export default Input;
