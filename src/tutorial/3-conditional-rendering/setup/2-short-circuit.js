import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setisError] = useState(false)
  console.log(text);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return <>
  {/* <h1>{firstValue}</h1>
  <h1>Value: {secondValue} </h1> */}
  <h2>{text || 'hello world'}</h2>
  <button className='btn' onClick={()=>setisError(!isError)}>  Toggle Error..</button>
    {isError && <h2> error hai mere bhai! </h2> }
    {isError ? <p>this is my error true</p>: <p>this is my error false</p>}
  </>
};

export default ShortCircuit;
