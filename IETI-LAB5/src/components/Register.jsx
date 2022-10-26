import React, { useState, useEffect } from 'react';
import '../App.css';

function Register() {
  const [dates, setDates] = useState("");
  
  function register() {
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;
    const name = document.querySelector(".name").value;
    const lastName = document.querySelector(".lastName").value;
    setDates({name, lastName, email, password});
  }
  
  useEffect(() => {
    const url = 'https://back-user-ieti.herokuapp.com/v1/user';
    console.log(dates);
    try{
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dates),
        }
      )
      .then(response => {
        response.json();
        console.log(response.status);
        if (response.status === 201) {
          window.location = '/';
        }
      })
      
    } catch(e) {
      console.log(e);
    }  
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dates]);

  return (
    <main className='mainContainer'>
        <div className='login'>
          <h1>Login</h1>
          <input className='name' type="text" placeholder="Name" />
          <input className='lastName' type="text" placeholder="LastName" />
          <input className='email' type="email" placeholder="Email" />
          <input className='password' type="password" placeholder="Password" />
          <button type="button" onClick={register}> Registrar</button>
        </div>
      </main>
  )

}

export default Register