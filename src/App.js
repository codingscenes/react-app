/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Component, createRef, useRef, useState } from 'react';
import Input from './UI/Input';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
    };
  }
  childRef = createRef();

  changeHandler = (event) => {
    const value = event.target.value;
  };

  focusHandler = () => {
    this.childRef.current.focusInput();
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
            invalid={false}
            onInputChange={this.changeHandler}
            ref={this.childRef}
          />
          <button className='btn btn-primary' onClick={this.focusHandler}>
            Focus Input Field
          </button>
        </div>
      </div>
    );
  }
}

export default App;
