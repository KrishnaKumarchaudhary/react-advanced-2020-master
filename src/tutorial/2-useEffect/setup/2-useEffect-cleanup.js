import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const [size, setsize] = useState(window.innerWidth);

  const checkSize=()=>{
  setsize(window.innerWidth);
  }

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize',checkSize);
    
    return ()=>{
      console.log('Cleanup!');
      window.removeEventListener('resize',checkSize);
    }
  });
  console.log('render');
  return <>
  <h2>useEffect cleanup</h2>
  <h2>{size}</h2>
  </>
};

export default UseEffectCleanup;
