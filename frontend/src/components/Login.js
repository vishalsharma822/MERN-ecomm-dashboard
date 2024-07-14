import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    // if alreay signup/login then not able to got to signup page
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async () => {
        let result = await fetch("http://localhost:5000/login", {
            method: 'post',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify({ email, password }),
        });

        result = await result.json();
        console.log(result);

        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/");
        } else {
            alert(result.result);
        }

    }
    return (
        <div className="register">
            <h1>Login</h1>
            <input type="text" className="inputBox" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" Enter email" />
            <input type="password" className="inputBox" value={password} onChange={(e) => setPassword(e.target.value)} placeholder=" Enter password" />
            <button className="signupButton" type="button" onClick={loginUser}>Login</button>
        </div>
    );
}

export default Login;