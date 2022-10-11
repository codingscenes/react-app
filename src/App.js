/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Component, createRef } from 'react';
import Input from './UI/Input';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
    };
  }

  inputRef = createRef(null);

  changeHandler = (event) => {
    const value = event.target.value;
    this.setState({ fullName: value });
  };

  focusHandler = () => {
    console.log(this.inputRef);
    // this.inputRef.current.focus();
    this.inputRef.current.inputFocus();
  };

  render() {
    return (
      <div className='main'>
        <div className='card'>
          <Input
            type={'text'}
            name={'fullName'}
            value={this.state.fullName}
            label={'Full Name'}
            htmlFor='fullName'
            onInputChange={this.changeHandler}
            ref={this.inputRef}
          />
          <button className='btn btn-primary' onClick={this.focusHandler}>
            Focus Input
          </button>
        </div>
      </div>
    );
  }
}

export default App;
