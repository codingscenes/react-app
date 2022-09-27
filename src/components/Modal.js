import React from 'react';


const Modal = (props) => {
    return (
        <div className="backdrop">
            <div className="modal">
                {props.children}
                <div className="modal-actions">
                    <button className='btn btn-sm' onClick={() => props.onClose(true)}>Okay</button>
                    <button className='btn btn-sm' onClick={() => props.onClose(false)}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;