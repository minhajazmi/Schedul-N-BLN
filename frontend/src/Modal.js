import React from 'react';
import { HiXCircle } from "react-icons/hi";

function Modal(props) {
    return (props.trigger) ? (
        <div className="overlay">
    <div className="modal">
        <div className="modalContainer">
        <HiXCircle onClick={() => props.setTrigger(false)} /></div>
        <div>{ props.children } </div> 
        </div>
     </div>
    ) : ""
}

export default Modal;

