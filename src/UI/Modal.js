import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const modalPortalElement = document.getElementById('modal-overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        modalPortalElement
      )}

      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        modalPortalElement
      )}
    </Fragment>
  );
};

export default Modal;
