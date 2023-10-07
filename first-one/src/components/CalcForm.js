import React, { useState } from "react";
import classes from './CalcForm.module.css';

const initialCalcData = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 10
}

const CalcForm = (props) => {

    const [calcData, setCalcData] = useState(initialCalcData);

    const resetHandler = () => {
        setCalcData(initialCalcData);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.onSaveCalcData(calcData);
    }

    const inputChangeHandler = (input, value) => {
        setCalcData((prevInput) => {
            return {
                ...prevInput,
                [input]: +value,
            };
        })
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" value={calcData['current-savings']} onChange={(e) => inputChangeHandler('current-savings', e.target.value)} />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" value={calcData['yearly-contribution']} onChange={(e) => inputChangeHandler('yearly-contribution', e.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" value={calcData['expected-return']} onChange={(e) => inputChangeHandler('expected-return', e.target.value)} />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" value={calcData['duration']} onChange={(e) => inputChangeHandler('duration', e.target.value)} />
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