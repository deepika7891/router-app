import React, { useState } from 'react'

function Calculator() {
  const [result, setResult] = useState([""]);
  return (
    <div className='App'>
      <div className='Container-fluid'>
        <div className='Calculator-box'>
          <input type='number' className='calInput' value={result} onChange={(e) => setResult(e.target.value)} />
        </div>
      </div>
    </div>
  )
}
export default Calculator