import './Main.css'
import React, {useState} from 'react'

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
    let newData = {...data};
    newData.homeValue = e.target.value;
    newData.downPayment = e.target.value * 0.2;
    newData.loanAmount = e.target.value * 0.8;
    setData(newData)
  }

  const setDownPayment = (e) => {
    let newData = {...data};
    newData.downPayment = e.target.value;
    newData.loanAmount = newData.homeValue - newData.downPayment;
    setData(newData)
  }

  const setLoanAmount = (e) => {
    let newData = {...data};
    newData.loanAmount = e.target.value;
    newData.downPayment = newData.homeValue - newData.loanAmount;
    setData(newData)
  }

  const setInterest = (e) => {
    let newData = {...data}
    newData.interestRate = e.target.value;
    setData(newData)
  }

  const setTenure = (e) => {
    let newData = {...data}
    newData.loanTerm = e.target.value
    setData(newData)
  }


  return (
    <main>
      <div className="container">
        {/* Home Value Input */}
        <div className="inputs">
          <label htmlFor='home' className='title'>Home Value</label>
          <label htmlFor='home' className='value'>$ {data.homeValue}</label>
          <input type="range" id="home" value={data.homeValue} step={100}  min={1000} max={10000} onChange={setHomeValue}/>
          <div className="ranges">
            <p className='min-val'>$ 1000</p>
            <p className='max-val'>$ 10000</p>
          </div>
        </div>
        {/* Down Payment Input */}
        <div className="inputs">
          <label htmlFor='down' className='title'>Down Payment</label>
          <label htmlFor='down' className='value'>$ {data.downPayment}</label>
          <input type="range" id="down" value={data.downPayment} step={100} min={0} max={data.homeValue} onChange={setDownPayment}/>
          <div className="ranges">
            <p className='min-val'>$ 0</p>
            <p className='max-val'>$ {data.homeValue}</p>
          </div>
        </div>
        {/* Loan Amount Input */}
        <div className="inputs">
          <label htmlFor='loan' className='title'>Loan Amount</label>
          <label htmlFor='loan' className='value'>$ {data.loanAmount}</label>
          <input type="range" id="loan" value={data.loanAmount} step={100} min={0} max={data.homeValue} onChange={setLoanAmount}/>
          <div className="ranges">
            <p className='min-val'>$ 0</p>
            <p className='max-val'>$ {data.homeValue}</p>
          </div>
        </div>
        {/* Interest Input */}
        <div className="inputs">
          <label htmlFor='interest' className='title'>Interest Rate</label>
          <label htmlFor='interest' className='value'>{data.interestRate} %</label>
          <input type="range" id="interest" value={data.interestRate} step={1} min={2} max={18} onChange={setInterest}/>
          <div className="ranges">
            <p className='min-val'>2 %</p>
            <p className='max-val'>18 %</p>
          </div>
        </div>
        {/* Drop down for Tenure */}
        <div className="inputs">
          <label htmlFor="tenure">Tenure</label>
          <select id="tenure" value={data.loanTerm} onChange={setTenure}>
            <option value={5}>5 Years</option>
            <option value={10}>10 Years</option>
            <option value={15}>15 Years</option>
            <option value={20}>20 Years</option>
            <option value={25}>25 Years</option>
          </select>
        </div>
      </div>
    </main>
  )
}

export default Main
