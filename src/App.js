import React, { useState } from "react";
import "./app.css";

function App() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const R = parseFloat(interestRate) / 12 / 100;
    const N = parseFloat(loanTenure);
    if (P && R && N) {
      const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
      setEmi(emiValue.toFixed(2));
    } else {
      setEmi("Please enter valid inputs");
    }
  };

  return (
    <div className="app-container">
      <h1>💰 EMI Calculator</h1>
      <div className="form-group">
        <label>Loan Amount (₹)</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          placeholder="Enter loan amount"
        />
      </div>

      <div className="form-group">
        <label>Annual Interest Rate (%)</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="Enter interest rate"
        />
      </div>

      <div className="form-group">
        <label>Loan Tenure (months)</label>
        <input
          type="number"
          value={loanTenure}
          onChange={(e) => setLoanTenure(e.target.value)}
          placeholder="Enter tenure in months"
        />
      </div>

      <button onClick={calculateEMI}>Calculate EMI</button>

      {emi && <h3 className="emi-result">Your Monthly EMI: ₹{emi}</h3>}
    </div>
  );
}

export default App;
