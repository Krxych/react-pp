import React, { useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState();
    const [enteredAge, setEnteredAge] = useState();

    const [error, setError] = useState();

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    }

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if(enteredUsername === undefined || enteredAge === undefined || enteredUsername === '' || enteredAge === ''){
            setError({
                title: 'Invalid input',
                message:'Please enter a valid name and age (non-empty values).'
            })
            return;
        }

        if(+enteredAge < 1){
            setError({
                title: 'Invalid age',
                message:'Please enter a valid age (> 0).'
            })
            return;
        }
        
        const formData = {
            username: enteredUsername,
            age: enteredAge
        }

        props.onSumbitForm(formData);

        setEnteredUsername('');
        setEnteredAge('');
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} /> }
            <Card>
                <form onSubmit={submitHandler}>
                    <div className="form__control">
                        <label>Username</label>
                        <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler} />
                    </div>
                    <div className="form__control">
                        <label>Age (Years)</label>
                        <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />
                    </div>
                    <div className="form__actions">
                        <button type="submit">Add User</button>
                    </div>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;