import React, { useState } from 'react';



function Login({setCurrentUser}) {
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    })

    //Login submission 
    function onSubmit(e) {
        e.preventDefault();
        const user = {
            username,
            password
        }

        fetch('/login', {
            method: 'POST',
            headers: { 'Accept': 'application/json',
            'Content-Type' : 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(user => {
                    setCurrentUser(user)
                })
            }
        })
    }
  return (
    <div>Login</div>
  )
}

export default Login