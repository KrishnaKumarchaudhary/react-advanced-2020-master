import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setfirstName] = useState('');
  const [email, setemail] = useState('');
  const [person, setperson] = useState([]);
  const handleSubmit =(e) =>{
    e.preventDefault();
    if(firstName && email){
    const person =  {id: new Date().getTime().toString(), firstName,email};
    setperson((people)=>{
      return [...people,person]
    });
    setfirstName('');
    setemail('');
    console.log(person);
    }
    else{
      console.log('empty values')
    }
  }
  return (
    <article>
      <form className='form' onSubmit={handleSubmit}> 
        <div className='form-control'>
          <label htmlFor='firstName'>Name : </label>
          <input type='text' 
                 id='fristName' 
                 name='firstName'
                 value={firstName}
                 onChange={(e)=>setfirstName(e.target.value)}
          />
          
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email : </label>
          <input type='text' 
                 id='email' 
                 name='email'
                 value={email}
                 onChange={(e)=>setemail(e.target.value)}/>
          
        </div>
        <button type='submit' > add Person </button>
      </form>
      {person.map((person,index)=>{
       const {id,firstName,email} = person;
       return(
         <div className='item' key={index}>
         <h3>{firstName}</h3>
         <p>{email}</p>  
         <p> Addd time {id}</p>
         </div>
       )
       
      })}
    </article>
  )
};

export default ControlledInputs;
