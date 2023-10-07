import React, { useState } from "react";

import logo from './assets/investment-calculator-logo.png';
import CalcForm from './components/CalcForm';
import CalcHeader from './components/CalcHeader';
import CalcTable from './components/CalcTable';

function App() {
  const [userInput, setUserInput] = useState();

  const calculateHandler = (userInput) => {
    setUserInput(userInput)
  };

  const yearlyData = [];

  if (userInput){
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
  
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }  
  }

  return (
    <div>
      <CalcHeader image={logo} />
      <CalcForm onSaveCalcData={calculateHandler} />

      {!userInput && <p style={{textAlign: 'center'}}>No investment calculated yet.</p>}
      {userInput && <CalcTable data={yearlyData} initialCalcData={userInput['current-savings']} />}

    </div>
  );
}

export default App;
