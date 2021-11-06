import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person, setPerson] = useState({firstName:'',age:'',email:''});
  const [people, setPeople] = useState([]);
const handleChanges =(e)=>{
   const name = e.target.name;
   const value = e.target.value;
   setPerson({...person,[name]: value});
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(person);
  
    if (person.firstName && person.email && person.age) {
       const newperson = { ...person, id: new Date().getTime().toString() };
       
       setPeople([...people, newperson]);
       setPerson({firstName:'',age:'',email:''});

    } else {
      console.log('empty values');
    }
   };
  return (
    <>
      <article>
        <form className='form' >
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChanges}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChanges}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='age'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChanges}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>  add person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div key={id} className='item'>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
