import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setshow] = useState(false);
  return <>
  <h2>show/hide</h2>
  <button className='btn' onClick={()=>setshow(!show)}>Hide and show</button>
  {show && <Item/> }
  </>
};

const Item = ()=>{
const [size, setsize] = useState(window.innerWidth);
const checkwidth = () =>{
  setsize(window.innerWidth);
};
useEffect(() => {
  window.addEventListener('resize',checkwidth);
  return() =>{
    window.removeEventListener('resize',checkwidth);
  }
}, [])
 return (<div>
    <h2>Window size</h2>
    <h2>{size}</h2>
     </div>)
}
export default ShowHide;
