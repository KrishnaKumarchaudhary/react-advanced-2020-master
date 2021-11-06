import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer =(state, action)=>{
if(action.type==='Testing')
{
  const newPeople = [...state.people,action.payload]
  return {...state,people:newPeople, ismodalOpen: true,modalContant :'item added'}
}
if(action.type==='Rendom'){
  return {...state,ismodalOpen:true,modalContant:'Please Enter valid value!'}
}
if(action.type==='CLOSE_MODAL')
{
  return {...state,ismodalOpen:false}
}
if(action.type ==='Remove_item')
{
  const newPeople = state.people.filter((person)=>person.id!==action.payload)
  return {...state,people:newPeople,ismodalOpen:true,modalContant:'item has removed'}
}
else throw new Error('No match function found!')

}

const defaultState ={
  people : data,
  ismodalOpen : false,
  modalContant: ''
}

const Index = () => {
  const [name, setname] = useState('');
   const [state, dispatch] = useReducer(reducer,defaultState)

  const handleSubmit=(e) =>{
    e.preventDefault();
    
    if(name){
      const newpeople = {id: new Date().getTime().toString(),name};
     dispatch({type:'Testing', payload:newpeople})
     setname('');
    }
    else{
      dispatch({type:'Rendom'})
    }
    console.log(name);
  }

  const closeModal=()=>{
    dispatch({type:'CLOSE_MODAL'})
  }
  return (
    <>
    {state.ismodalOpen && <Modal closeModal={closeModal} modalContant={state.modalContant}/>}
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <input type='text' value={name} onChange={(e)=>setname(e.target.value)}/>
        <button type='submit'>submit</button>
      </div>
    </form>
    {state.people.map((person)=>{
      return <>
      <div className='item'>
        <h2>{person.name}</h2>
        <button type='button' onClick={()=>dispatch({type:'Remove_item',payload:person.id})}>Remove</button>
        </div>
      </>
    })

    }
    
    </>
  )
};

export default Index;
