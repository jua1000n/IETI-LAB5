import React, { useState, useEffect } from 'react';
import '../App.css';

function Login() {
  const [dates, setDates] = useState("");
  
  function login() {
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;
    setDates({email, password});
  }
  
  useEffect(() => {
    const url = 'https://back-user-ieti.herokuapp.com/v1/auth';
    console.log("wenas");
    try{
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dates),
        }
      )
      .then(response => response.json())
      .then(data => {
        console.log(data.token);
        if (data.token) {
          window.location = '/task';
        }
      });      
      
    } catch(e) {
      console.log(e);
    }  
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dates]);

  return (
    <main className='mainContainer'>
        <div className='login'>
          <h1>Login</h1>
          <input className='email' type="email" placeholder="Email" />
          <input className='password' type="password" placeholder="Password" />
          <button type="button" onClick={login}> Logear</button>
          <span class="css-141922f e5i1odf3">Don't have an account?
            <a href="/register">&nbsp;Sign Up</a>
          </span>
        </div>
      </main>
  )

}

export default Login