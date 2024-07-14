import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    // if alreay signup/login then not able to got to signup page
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // function for signup api for backend
    const submitSignup = async () => {
        // console.log(name + '  ---  ' + email + '  ---  ' + password);
        let result = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name, email, password }),
        });
        result = await result.json();
        if (result) {
            localStorage.setItem('user', JSON.stringify(result))
            navigate('/');
        }
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <input type="text" className="inputBox" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
            <input type="text" className="inputBox" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" Enter email" />
            <input type="password" className="inputBox" value={password} onChange={(e) => setPassword(e.target.value)} placeholder=" Enter password" />
            <button className="signupButton" type="button" onClick={submitSignup}>Signup</button>
        </div>
    );
}

export default Signup;