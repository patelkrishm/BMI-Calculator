import React, { useState } from 'react'
import './BMI.css'
export const BMI = () => {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  const calbmi = (e) => {
    if (height === 0 || weight === 0) {
      alert("please enter a value")
    }

    else {
      const bmi = (weight / height * height)
      setBmi(bmi.toFixed(1));
      if (bmi <= 18.4) {
        setMessage('Underweight')
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setMessage("Normal")
      } else if (bmi >= 25 && bmi <= 39.9) {
        setMessage("Overweight")
      } else if (bmi >= 40) {
        setMessage("Obese")
      }
    }
  }

  const reset=()=>{
    setHeight("")
    setWeight("")
    setBmi("")
    setMessage("")
  }
  return (
    <>
      <div className="container">
        <h1>BMI Calculator</h1>
        <div className="input">
          <span>Weight</span><br></br>
          <input type="number" placeholder='Enter a value' value={weight} onChange={(e) => setWeight(e.target.value)} />
          <span>Height</span><br />
          <input type="number" placeholder='Enter a value' value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>

        <div className="output">
          <button onClick={calbmi}>Submit</button>
          <button onClick={reset}>Reset</button>
          <div className="score">
            <span className='ab'>Your BMI score is {bmi}<br/>{message}</span>
            <span className='msg'></span>
          </div>
        </div>
      </div>
    </>
  )
}
