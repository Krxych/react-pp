import React from "react";
import Card from "../UI/Card";

const ErrorModal = (props) => {

    if(props.error){
        return (
            <div className="modal-screen">
                <Card className="modal">
                    <div className="modal-title">
                        <h3>Invalid input</h3>
                    </div>
                    <div className="modal-content">
                        <p>Message</p>
                        <button type="button" className="button">
                            Okay
                        </button>
                    </div>
                </Card>
            </div>
        );
    }
}

export default ErrorModal;