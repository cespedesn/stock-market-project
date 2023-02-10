import React, { useState } from 'react';
import { 
    Form, FormGroup, Label, Input, Button
} from 'reactstrap'


function Login({setCurrentUser}) {
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    })

    //Login submission 
    // This code is a function that is called when a form is submitted. It creates an object with the username and password from the form, then sends a POST request to the '/login' endpoint with the user object as the body. If the response is successful, it will parse the response as JSON and set the current user.

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
                Email
                </Label>
                <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
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
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
                />
            </FormGroup>
            {' '}
            <Button>
                Submit
            </Button>
        </Form>
    </div>
  )
}

export default Login