import React from "react";
import Card from "../UI/Card";

const ErrorModal = (props) => {
    return (
        <div className="modal-screen" onClick={props.onConfirm}>
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

export default ErrorModal;