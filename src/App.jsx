import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='header'>
        <h1>BMI CALCULATOR</h1>
      </div>
      <div className='container'>
        <p>Weight: </p>
        <input type='range' min={40} max={220} value={130}></input>
        <p>Height: </p>
        <input type='range' min={140} max={220} value={180}></input>
        <div className='result'>
          <p>Your BMI is</p>
          <div className='bmi'>
            <p>0.0</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
