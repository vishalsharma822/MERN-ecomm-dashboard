import React, { useState } from "react";

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitSignup = () => {
        console.log(name + '  ---  ' + email + '  ---  ' + password)
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