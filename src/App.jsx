import { useMemo, useState } from 'react'
import './App.css'

function App() {

  const [weight, setWeight] = useState(130);
  const [height, setHeight] = useState(180);
  const bmi = useMemo(() => calculateBmi(weight, height), [weight, height]);

  function handleWeight(event) {
    setWeight(event.target.value);
  }

  function handleHeight(event) {
    setHeight(event.target.value);
  }

  function calculateBmi(weight, height) {
    return (weight / ((height/100)**2)).toFixed(1)
  }

  return (
    <>
      <div className='header'>
        <h1>BMI CALCULATOR</h1>
      </div>
      <div className='container'>
        <p>Weight: {weight} kg</p>
        <input type='range' min={40} max={220} onChange={(e)=>{handleWeight(e)}}></input>
        <p>Height: {height} cm</p>
        <input type='range' min={140} max={220} onChange={(e)=>{handleHeight(e)}}></input>
        <div className='result'>
          <p>Your BMI is</p>
          <div className='bmi'>
            <p>{bmi}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
