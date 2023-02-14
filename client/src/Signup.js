import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { 
    Form, FormGroup, Label, Input, Button
} from 'reactstrap'

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [loginInfo, setLoginInfo] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: ""
    });

    // This code is used to create a new user. It takes the user's firstname, lastname, username, email, and password and sends a POST request to the '/users' endpoint. If the request is successful, the user is navigated to the '/' page. If the request is unsuccessful, an alert is displayed with the errors.
function onSubmit(e) {
        e.preventDefault();
        const firstname = e.target.elements.firstname.value;
        const lastname = e.target.elements.lastname.value;
        const username = e.target.elements.username.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const user = {
            firstname,
            lastname,
            username,
            email,
            password
        }

        fetch('/users', {
            method: 'POST',
            headers: {'Accept' : 'application/json',
            'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(user => {
                    Navigate('/')
                })
            } else {
                res.json().then(json => (alert(json.errors)))
            }
        })
    }


    // This code is used to handle user input and update the loginInfo state with the new value. The spread operator is used to keep the existing state and only update the value of the key that corresponds to the input name.
const handleInput = (e) => {
        setLoginInfo({...loginInfo, [e.target.name]: e.target.value})
    }

    // This code is a function that toggles the value of the boolean variable showPassword. When the function is called, the value of showPassword will be flipped from true to false or vice versa.
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

export default Signup