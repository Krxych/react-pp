import classes from './CalcHeader.module.css';

const CalcForm = (props) => {
    return(
        <header className={classes.header}>
            <img src={props.image} alt="logo" />
            <h1>Investment Calculator</h1>
        </header>
    );
}

export default CalcForm;