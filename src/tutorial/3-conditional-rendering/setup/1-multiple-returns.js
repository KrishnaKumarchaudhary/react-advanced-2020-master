import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarsons';
const MultipleReturns = () => {
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false);
  const [user, setUser] = useState('Defauld User!')
  
 useEffect(() => {

   fetch(url)
   .then((resp)=>{
     if(resp.status >= 200&& resp.status <= 299)
     {
      return resp.json();
     }
     else{
       setisLoading(false);
       setisError(true);
       throw new Error(resp.statusText);
     }
   })
   .then((user)=>{
     const {login} =user;
     setUser(login);
     setisLoading(false)
    })
   .catch((error)=>console.log(error) );
 },[]) 
 
  if(isLoading)
  {
    return <h2>Loading.....</h2>;
  }
  if(isError)
  {
    return <h2>Error.....</h2>;
  }
  return <h2>{user}</h2>;
};

export default MultipleReturns;
