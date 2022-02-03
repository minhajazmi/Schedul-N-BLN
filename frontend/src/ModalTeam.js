import React from 'react';
import { HiXCircle } from "react-icons/hi";

function ModalTeam(props) {
    return (props.trigger) ? (
        <div className="overlay">
    <div className="modalTeam">
        <div className="modalContainer">
        <HiXCircle onClick={() => props.setTrigger(false)} /></div>
        <div>{ props.children } </div> 
        </div>
     </div>
    ) : ""
}

export default ModalTeam;

