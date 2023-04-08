import React from 'react';
import './Signin.css'
import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function submit(e){
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/users/login",{
                email: email,
                password: password
            });
            console.log(response);
            console.log(response.data.token);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("email", response.data.user.email);
            console.log("Login Successfully");
            navigate("/Home");
            
        } catch (error) {
            console.log(error);
            
        }
    }

    return(
        <div className="signInBackground">
            <form>
            <h3>Sign In</h3>
            
            <div className="mb-3">
            <label>Email address</label>
            <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e)=>{
                   // console.log(e.target.value);
                    setEmail(e.target.value);
                }}
            />
            </div>

            <div className="mb-3">
            <label>Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e)=>{
                    //console.log(e.target.value);
                    setPassword(e.target.value);
                }}
            />
            </div>

            <div className="d-grid">
            <button type="submit" className="btn-primary" onClick={submit}>
                Sign In
            </button>
            </div>
            <p className="forgot-password text-right">
            Create Account <a href="/">sign up?</a>
            </p>
        </form>
      </div>
    )
}

export default SignUp;