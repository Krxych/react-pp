import React, { Fragment, useState, useRef } from "react";
import Card from "../UI/Card";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if(enteredName === undefined || enteredUserAge === undefined || enteredName === '' || enteredUserAge === ''){
            setError({
                title: 'Invalid input',
                message:'Please enter a valid name and age (non-empty values).'
            })
            return;
        }

        if(+enteredUserAge < 1){
            setError({
                title: 'Invalid age',
                message:'Please enter a valid age (> 0).'
            })
            return;
        }
        
        const formData = {
            username: enteredName,
            age: enteredUserAge
        }

        props.onSumbitForm(formData);
        nameInputRef.current.value="";
        ageInputRef.current.value="";
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Fragment>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} /> }
            <Card>
                <form onSubmit={submitHandler}>
                    <div className="form__control">
                        <label>Username</label>
                        <input type="text" id="username" ref={nameInputRef} />
                    </div>
                    <div className="form__control">
                        <label>Age (Years)</label>
                        <input type="number" id="age" ref={ageInputRef} />
                    </div>
                    <div className="form__actions">
                        <button type="submit">Add User</button>
                    </div>
                </form>
            </Card>
        </Fragment>
    );
}

export default AddUser;