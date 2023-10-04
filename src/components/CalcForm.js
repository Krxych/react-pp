import React, { useState } from "react";

const initialCalcData = {
    currentSavings: 10000,
    yearlySavings: 1200,
    interest: 7,
    duration: 10
}

const CalcForm = (props) => {
    const [enteredCurrentSavings, setEnteredCurrentSavings] = useState(initialCalcData.currentSavings);
    const [enteredYearlySavings, setEnteredYearlySavings] = useState(initialCalcData.yearlySavings);
    const [enteredInterest, setEnteredInterest] = useState(initialCalcData.interest);
    const [enteredDuration, setEnteredDuration] = useState(initialCalcData.duration);

    const currentSavingsChangeHandler = (e) => {
        setEnteredCurrentSavings(e.target.value);
    }

    const yearlySavingsChangeHandler = (e) => {
        setEnteredYearlySavings(e.target.value);
    }

    const interestChangeHandler = (e) => {
        setEnteredInterest(e.target.value);
    }

    const durationChangeHandler = (e) => {
        setEnteredDuration(e.target.value);
    }

    const resetHandler = () => {
        setEnteredCurrentSavings(enteredCurrentSavings);
        setEnteredYearlySavings(enteredYearlySavings);
        setEnteredInterest(enteredInterest);
        setEnteredDuration(enteredDuration);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const calcData = {
            currentSavings: enteredCurrentSavings,    
            yearlySavings: enteredYearlySavings,    
            interest: enteredInterest,    
            duration: enteredDuration,    
        };

        props.onSaveCalcData(calcData);

        setEnteredCurrentSavings('');
        setEnteredYearlySavings('');
        setEnteredInterest('');
        setEnteredDuration('');
    }

    return(
        <form className="form" onSubmit={submitHandler}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" onChange={currentSavingsChangeHandler} />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" onChange={yearlySavingsChangeHandler} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" onChange={interestChangeHandler} />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" onChange={durationChangeHandler} />
                </p>
            </div>
            <p className="actions">
            <button onClick={resetHandler} type="reset" className="buttonAlt">
                Reset
            </button>
            <button type="submit" className="button">
                Calculate
            </button>
            </p>
        </form>
    );
}

export default CalcForm;