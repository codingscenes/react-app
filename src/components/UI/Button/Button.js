// import styled from 'styled-components';

// const Button = styled.button`
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #ccc;
//   color: white;
//   background: #000;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;
//   border-radius: 8px;

//   &:focus {
//   outline: none;
// }

// &:hover,
// &:active {
//   background: #43322c;
//   border-color: #ccc;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }

// @media(min - width: 768px) {
//   width: auto;
// }
// `

import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button type={props.type} className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
