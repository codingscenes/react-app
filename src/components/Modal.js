import React from 'react';



const Modal = (props) => {
    return (
        <React.Fragment>
            <div className="backdrop">
            </div>
            <div className="modal">
                {props.content}
                <div className="modal-actions">
                    <button className='btn btn-sm' onClick={() => props.onClose(true)}>Okay</button>
                    <button className='btn btn-sm' onClick={() => props.onClose(false)}>Close</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Modal;