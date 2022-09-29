import React, { useState, useEffect } from 'react';
import '../App.css';

function Login() {
  let [dates, setDates] = useState({});
  const [tokenL, setTokenL] = useState("");
  
  function login() {
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;
    dates = {email, password};
    setDates({email, password});
    console.log(dates);
  }
  
  useEffect(() => {
    const url = 'https://back-user-ieti.herokuapp.com/v1/auth';

    try{
      if (JSON.stringify(dates) !== "{}") {
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dates),
          }
        )
        .then(response => response.json())
        .then(data => setTokenL(data.token));
        console.log(tokenL);
        if (tokenL) {
          window.location = '/task';
        }
      } 
      
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
        </div>
      </main>
  )

}

export default Login