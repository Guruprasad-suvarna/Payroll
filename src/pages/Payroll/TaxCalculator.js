import React, { useState } from 'react';
import './TaxCalculator.css';

const TaxCalculator = () => {

  const [income, setIncome] = useState(0);
//   const [taxRate] = useState(20);
  const [taxAmount, setTaxAmount] = useState(0);

  const handleIncomeChange = (e) => {
    setIncome(Number(e.target.value));
  };

  const calculateTax = () => {
    // const tax = (income * 18) / 100;
    let calculatedTax = 0;

    if (income <= 700000) {
        calculatedTax = income * 0.30;
      } else if (income <= 1500000) {
        calculatedTax = income * 0.45;
      } else {
        calculatedTax = income * 0.60;
      }

    setTaxAmount(calculatedTax);
  };

  return (
    <div className='container'>
    <div className="tax-calculator">
      <h2>Tax Calculator</h2>
      <div>
        <label htmlFor="income">Income:</label>
        <select id="income" value={income} onChange={handleIncomeChange}>
          <option value="0">Select Income</option>
          <option value="10000">4,00,000</option>
          <option value="20000">6,00,000</option>
          <option value="30000">10,00,000</option>
          <option value="40000">24,00,000</option>
        </select>
      </div>
      <button onClick={calculateTax}>Calculate Tax</button>
      {/* {taxAmount > 0 && ( */}
        <div>
          <label htmlFor="taxAmount">Tax Amount:</label>
          <input type="text" id="taxAmount" value={taxAmount} readOnly />
        </div>
      {/* )} */}
    </div>
    </div>
  );
};

export default TaxCalculator;
