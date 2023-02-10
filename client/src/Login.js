import React, { useState } from 'react';
import { 
    Form, FormGroup, Label, Input, Button
} from 'reactstrap'


function Login({setCurrentUser}) {
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    })
    const [showPassword, setShowPassword] = useState(false);
    const [passwordButton, setPasswordButton] = useState("Show Password")

    //Login submission 
    // This code is a function that is called when a form is submitted. It creates an object with the username and password from the form, then sends a POST request to the '/login' endpoint with the user object as the body. If the response is successful, it will parse the response as JSON and set the current user.

    function onSubmit(e) {
        e.preventDefault();
        const user = {
            username,
            password}

        fetch('/login', {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type' : 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(user => {
                    setCurrentUser(user)
                })
            }
            else {
                res.json().then(json => {alert(json.error)})
            }
        })
    }


    //Handle character input in form
   // This code is a function that takes an event (e) as an argument. It uses the spread operator to create a new object based on the existing loginForm object, and then updates the value of the property that matches the name of the event target with the value of the event target.
    const handleInput = (e) => {
        setLoginForm({...loginForm, [e.target.name]: e.target.value})
    }

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

  return (
    <div>
        <Form 
        className='login-form'
        onSubmit={onSubmit}
        >
            <FormGroup>
                <Label
                for="exampleEmail"
                hidden
                >
                Username
                </Label>
                <Input
                onChange={handleInput}
                id="username"
                name="username"
                placeholder="username"
                type="name"
                />
            </FormGroup>
            {' '}
            <FormGroup>
                <Label
                for="examplePassword"
                hidden
                >
                Password
                </Label>
                <Input
                id="password"
                name="password"
                placeholder="Password"
                type= {showPassword ? "text" : "password"}
                />
            </FormGroup>
            {' '}
            <Button>
                Submit
            </Button>
            <Button onClick={togglePassword}>
               Toggle Password
            </Button>
        </Form>
    </div>
  )
}

export default Login