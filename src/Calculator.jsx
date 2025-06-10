import React, { useState } from 'react'
import './Calculator.css'
const Calculator = () => {
    const [value,setValue]= useState('')
  return (
   <div className="bordermain">
    <div  className='inputHeader'>
        <input type="text" value={value} className="input"/>
        <div>
            <button onClick={e=>setValue(" ")}>AC</button>
            <button onClick={e=>setValue(value.slice(0,-1))}>DE</button>
            <button onClick={e=>setValue(value + e.target.value)} value={'.'}>.</button>
            <button onClick={e=>setValue(value + e.target.value)} value={'/'} >/</button>        
        </div>
        <div>
            <button onClick={e=>setValue(value + e.target.value)} value={"7"}>7</button>
            <button onClick={e=>setValue(value + e.target.value)} value={'8'}>8</button>
            <button onClick={e=>setValue(value + e.target.value)} value={'9'} >9</button>
            <button onClick={e=>setValue(value + e.target.value)} value={'*'} >*</button>        
        </div>
        <div>
            <button onClick={e=>setValue(value + e.target.value)} value={'4'}>4</button>
            <button onClick={e=>setValue(value + e.target.value)} value={'5'}>5</button>
            <button onClick={e=>setValue(value + e.target.value)} value={'6'}>6</button>
            <button onClick={e=>setValue(value + e.target.value)} value={'+'}>+</button>        
        </div>
        <div>
            <button onClick={e=>setValue(value + e.target.value)} value={'1'}>1</button>
            <button onClick={e=>setValue(value + e.target.value)} value={'2'}>2</button>
            <button onClick={e=>setValue(value + e.target.value)} value={'3'}>3</button>
            <button onClick={e=>setValue(value + e.target.value)} value={'-'}>-</button>        
        </div>
        <div>
            <button onClick={e=>setValue(value + e.target.value)} value={'00'}>00</button>
            <button onClick={e=>setValue(value + e.target.value)} value={'0'}>0</button>
           <button onClick={()=>setValue(eval(value))}>=</button>
        </div>

    </div>
   </div>
  )
}

export default Calculator