import React from 'react';
import ReactDOM from 'react-dom';


const BackDrop = props => <div className="backdrop"></div>

const ModalOverlay = props => {
    return (<div className="modal">
        {props.content}
        <div className="modal-actions">
            <button className='btn btn-sm' onClick={() => props.onClose(true)}>Okay</button>
            <button className='btn btn-sm' onClick={() => props.onClose(false)}>Close</button>
        </div>
    </div>)
}

const Modal = (props) => {
    return (
        <React.Fragment>
            {/* <BackDrop /> */}
            {ReactDOM.createPortal(<BackDrop />, document.getElementById('backdrop'))}
            {ReactDOM.createPortal(<ModalOverlay content={props.content} onClose={props.onClose} />, document.getElementById('modal-overlay'))}

        </React.Fragment>
    );
}

export default Modal;