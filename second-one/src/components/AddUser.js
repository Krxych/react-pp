import React, { useState } from "react";
import Card from "../UI/Card";

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState();
    const [enteredAge, setEnteredAge] = useState();

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    }

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if(enteredUsername === undefined || enteredAge === undefined || enteredUsername === '' || enteredAge === ''){
            return;
        }

        if(+enteredAge < 1){
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

    return (
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
    );
}

export default AddUser;