import "./Main.css";
import React, { useState } from "react";
import Inputs from "./Inputs";
import Result from "./Result";

const Main = () => {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
    // monthlyPayment: 0,
  });

  const setHomeValue = (e) => {
    let newData = { ...data };
    newData.homeValue = e.target.value;
    newData.downPayment = e.target.value * 0.2;
    newData.loanAmount = e.target.value * 0.8;
    setData(newData);
  };

  const setDownPayment = (e) => {
    let newData = { ...data };
    newData.downPayment = e.target.value;
    newData.loanAmount = newData.homeValue - newData.downPayment;
    setData(newData);
  };

  const setLoanAmount = (e) => {
    let newData = { ...data };
    newData.loanAmount = e.target.value;
    newData.downPayment = newData.homeValue - newData.loanAmount;
    setData(newData);
  };

  const setInterest = (e) => {
    let newData = { ...data };
    newData.interestRate = e.target.value;
    setData(newData);
  };

  const setTenure = (e) => {
    let newData = { ...data };
    newData.loanTerm = e.target.value;
    setData(newData);
  };

  return (
    <main>
      {/* Sliders */}
      <div className="container">
        {/* Home Value Input */}
        <Inputs
          type="home"
          title="Home Value"
          value={data.homeValue}
          step={100}
          min={1000}
          max={10000}
          onChange={setHomeValue}
        />
        {/* Down Payment Input */}
        <Inputs
          type="down"
          title="Down Payment"
          value={data.downPayment}
          step={100}
          min={0}
          max={data.homeValue}
          onChange={setDownPayment}
        />
        {/* Loan Amount Input */}
        <Inputs
          type="loan"
          title="Loan Amount"
          value={data.loanAmount}
          step={100}
          min={0}
          max={data.homeValue}
          onChange={setLoanAmount}
        />
        {/* Interest Input */}
          <Inputs
          type="interest"
          title="Interest Rate"
          value={data.interestRate}
          step={1}
          min={2}
          max={18}
          onChange={setInterest}
        />
        {/* Drop down for Tenure */}
        <div className="inputs">
          <label htmlFor="tenure">Tenure</label>
          <select
            className="round"
            id="tenure"
            value={data.loanTerm}
            onChange={setTenure}
          >
            <option value={5}>5 Years</option>
            <option value={10}>10 Years</option>
            <option value={15}>15 Years</option>
            <option value={20}>20 Years</option>
            <option value={25}>25 Years</option>
          </select>
        </div>
      </div>
      {/* Chart */}
      <Result data={data} />
    </main>
  );
};

export default Main;
