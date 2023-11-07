import React, { useState } from 'react';

function Calculator() {
   const [result, setResult] = useState("");
   return (
      <>
      
         <div className='container-fluid'>
            <div className='cal-box'>
               <form action='' className='form1'> 
                  <div className='display'>
                     <input type='text' value={result} />
                  </div>
                  <div>
                     <input type='button' value='AC' onClick={e => setResult('')} />
                     <input type='button' value='DE' onClick={e => setResult(result.slice(0, -1))} />
                     <input type='button' value='.' onClick={e => setResult(result + e.target.value)} />
                     <input type='button' value='/' onClick={e => setResult(result + e.target.value)} />
                  </div>
                  <div>
                     <input type='button' value='7' onClick={e => setResult(result + e.target.value)} />
                     <input type='button' value='8' onClick={e => setResult(result + e.target.value)} />
                     <input type='button' value='9' onClick={e => setResult(result + e.target.value)} />
                     <input type='button' value='*' onClick={e => setResult(result + e.target.value)} />
                  </div>
                  <div>
                     <input type='button' value='4' onClick={e => setResult(result + e.target.value)} />
                     <input type='button' value='5' onClick={e => setResult(result + e.target.value)} />
                     <input type='button' value='6' onClick={e => setResult(result + e.target.value)} />
                     <input type='button' value="+" onClick={e => setResult(result + e.target.value)} />
                  </div>
                  <div>
                     <input type='button' value='1' onClick={e => setResult(result + e.target.value)} />
                     <input type='button' value='2' onClick={e => setResult(result + e.target.value)} />
                     <input type='button' value='3' onClick={e => setResult(result + e.target.value)} />
                     <input type='button' value='-' onClick={e => setResult(result + e.target.value)} />
                  </div>
                  <div>
                     <input type='button' value='00' onClick={e => setResult(result + e.target.value)} />
                     <input type='button' value='0' onClick={e => setResult(result + e.target.value)} />
                     <input type='button' value='=' className='equal' onClick={e => {
                       try {
                        const evaluatedResult = eval(result);
                        if (evaluatedResult !== Infinity) {
                          setResult(evaluatedResult.toString());
                        } else {
                          setResult("Error: Division by zero");
                        }
                      } catch (error) {
                        setResult("Error: Invalid Input");
                      }
                     }} />
                  </div>
               </form>
            </div>
         </div>
      </>

   );
}

export default Calculator;

