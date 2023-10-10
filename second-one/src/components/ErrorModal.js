import React from "react";
import ReactDOM from "react-dom";

import Card from "../UI/Card";

const Modal = props => {
    return (
        <div className="modal-screen">
            <Card className="modal">
                <div className="modal-title">
                    <h3>{props.title}</h3>
                </div>
                <div className="modal-content">
                    <p>{props.message}</p>
                    <button type="button" className="button" onClick={props.onConfirm}>
                        Okay
                    </button>
                </div>
            </Card>
        </div>
    );
}

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Modal title={props.title} message={props.message} onConfirm={props.onConfirm} onClick={props.onConfirm}/>, document.getElementById('modal-root'))}
        </React.Fragment>
    );
}

export default ErrorModal;