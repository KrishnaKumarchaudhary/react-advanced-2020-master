import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
const [value, setvalue] = useState(0);
useEffect(() => {
  if(value>0){
 console.log('call useEffect'); 
 document.title = `New Message (${value})`;
  }
},[value]);

useEffect(() => {
  console.log('Hello Worls!');

}, [])
console.log('render component');


  return <>
  <h1>{value}</h1>
  <button className='btn' onClick={()=>setvalue(value + 1)}> click me</button>
  </>;
};

export default UseEffectBasics;
